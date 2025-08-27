import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface LikeButtonProps {
  pageId: string;
}

const ViewButton: React.FC<LikeButtonProps> = ({ pageId }) => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const storageKey = `liked_${pageId}`;

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "likes", pageId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setLikes((data.count ?? 0) as number);
      } else {
        await setDoc(docRef, { count: 0 });
        setLikes(0);
      }

      const isLiked = localStorage.getItem(storageKey) === "true";
      setLiked(isLiked);

      setLoading(false);
    };

    fetchLikes();
  }, [pageId, storageKey]);

  const handleLike = async () => {
    if (liked) return;

    const docRef = doc(db, "likes", pageId);
    await setDoc(docRef, { count: likes + 1 });
    setLikes(likes + 1);

    setLiked(true);
    localStorage.setItem(storageKey, "true");
  };

  if(loading) return (
    <button className="cursor-pointer flex flex-row" onClick={handleLike} disabled={liked}>
        <span className="text-xl">loading likes... </span> 
    </button>)

  return (
    <button className="cursor-pointer flex flex-row" onClick={handleLike} disabled={liked}>
     <span className="text-3xl">{likes} {liked ? "❤️️" : "🤍"} </span> 
    </button>
  );
};

export default ViewButton;
