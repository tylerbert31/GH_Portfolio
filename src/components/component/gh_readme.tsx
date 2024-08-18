import React from "react";

const SkillIcons = () => {
  const image_src =
    "https://skillicons.dev/icons?i=html,css,nextjs,ts,js,nodejs,npm,yarn,vercel,aws,react,vite,express,php,laravel,prisma,postgres,mysql,firebase,mongodb,supabase,sqlite,redis,postman,docker,github,bootstrap,tailwind,materialui,vscode,linkedin,instagram,twitter,github,git,discord,c,ae,pr";
  return (
    <div className="flex flex-wrap">
      <img src={image_src} className="" alt="Skills" />
    </div>
  );
};

export default SkillIcons;
