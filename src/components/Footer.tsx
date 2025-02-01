import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="container bg-gray-800 text-gray-300 py-3">
      <div className="mx-auto flex flex-col items-center">
        <p className="text-sm mb-4">
          © 2025 Aleksei Savchenko. All rights reserved.
        </p>
        <nav aria-label="Social media">
          <ul className="flex gap-4">
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/aleksei-savchenko-a62b541a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.16H3.56V8.99h3.56v11.17zm-1.78-12.8a2.07 2.07 0 11.01-4.14 2.07 2.07 0 010 4.14zm15.22 12.8h-3.56v-5.59c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.94v5.69h-3.56V8.99h3.42v1.52h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.33 2.41 4.33 5.54v6.97z" />
                </svg>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/alexey-savchenko-am"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .296c-6.63 0-12 5.372-12 12 0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.091-.746.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.123-.304-.535-1.527.117-3.177 0 0 1.007-.322 3.3 1.23.96-.267 1.985-.399 3.005-.404 1.02.005 2.045.137 3.005.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.65.243 2.873.12 3.177.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.014 2.902-.014 3.293 0 .319.192.694.801.576 4.765-1.589 8.2-6.083 8.2-11.386 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </li>

            {/* LeetCode */}
            <li>
              <a
                href="https://leetcode.com/goOrn/" // Замените на ваш профиль LeetCode
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition"
                aria-label="LeetCode"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;