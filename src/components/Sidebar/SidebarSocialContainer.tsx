// import React from "react";
// import SocialComponent from "./SocialComponent";
// import { TSocialSidebar } from "../../types/TSocialSidebar";
// // icons imports

// import socialData from "../../data/socialData.json";

// // TODO: refactor to extract social to props and use in sidebar
// const socials: TSocialSidebar[] = socialData.socials;
// const SidebarSocialContainer: React.FC = () => {
//   const socialComponents: { [key: string]: JSX.Element } = {
//     GitHub: <GitHub />,
//     LinkedIn: <LinkedIn />,
//     X: <X />,
//     Instagram: <Instagram />,
//   };

//   return (
//     <div className="flex flex-wrap justify-evenly p-2">
//       {socials.map((social: TSocialSidebar) =>
//         social.href ? (
//           <SocialComponent key={social.name} sidebarItem={social}>
//             {socialComponents[social.name] || null}
//           </SocialComponent>
//         ) : null
//       )}
//     </div>
//   );
// };

// export default SidebarSocialContainer;
