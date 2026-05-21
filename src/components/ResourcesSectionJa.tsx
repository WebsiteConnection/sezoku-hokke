import React from "react";
import { Play, BookOpen, Heart, Globe, Award, Headphones } from "lucide-react";

const resources = [
  {
    title: "紹介動画",
    description: "本教えの概要を簡潔に説明した12分間のスライドプレゼンテーションをご覧ください。",
    icon: Play,
    url: "https://drive.google.com/file/d/1rPBFP4sz_QwE4GiBrpSwWrZAj9LmVVBn/view?usp=sharing"
  },
  {
    title: "『内在からの究極』",
    description: "2024年に初めて発表された学術論文の最新版をご覧いただけます。",
    icon: BookOpen,
    url: "https://drive.google.com/file/d/1DV25M01MNvVrEjAj4A9v5yoU0ESxgd1T/view?usp=drive_link"
  },
  {
    title: "音声朗読",
    description: "論文『内在からの究極』の朗読をお聞きいただけます。",
    icon: Headphones,
    url: "https://drive.google.com/file/d/18ydRe3MUxqqMImycKjj8soFj6Am4SOTW/view?usp=sharing"
  },
  {
    title: "世俗の祈り",
    description: <><em>『法華経』</em>に基づく伝統的な儀礼を、いかにして世俗的な世界観に適応させることができるかを考察します。</>,
    icon: Heart,
    url: "https://drive.google.com/file/d/1gDc1oaHPlhOIbnTrhTV3ntTM0kd6YtpQ/view?usp=drive_link"
  },
  {
    title: "世俗仏教ネットワークの記事",
    description: "本教えが他の形態の世俗仏教とどのように異なるのかに焦点を当てています。",
    icon: Globe,
    url: "https://drive.google.com/file/d/1EbT7dTw_JnYhhgHWqYkxFkElyvI42bVW/view?usp=drive_link"
  },
  {
    title: "グロマイヤー賞ノミネート",
    description: "2027年グロマイヤー賞（宗教部門）の推薦資料です。",
    icon: Award,
    url: "https://drive.google.com/file/d/1K2P8tYJ8jySWwSdpJvvBAh6va9DcwoLw/view?usp=drive_link"
  },
  {
    title: "世俗仏教運動",
    description: "世俗仏教運動全体における多様な潮流や系譜、指導者を俯瞰的に紹介するリソース・ディレクトリです。",
    icon: Globe,
    url: "https://sezoku-bukkyo.vercel.app/"
  }
];

const ResourcesSectionJa = () => {
  return (
    <section className="py-20 px-6 bg-background/50" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-neutral-900 text-center mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          この教えを知る
        </h2>

        <p className="text-neutral-900 text-center mb-14 max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          【ご案内】以下のリンク先は、複雑な考察を含む内容となっております。現在、日本語表現の正確性を精査中ですが、その革新的な内容を鑑み、現時点で公開しております。
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => {
            // Check if this card is the odd one out at the very end of the list
            const isLastOdd = index === resources.length - 1 && resources.length % 2 !== 0;

            return (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isLastOdd ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : "h-full"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-neutral-900 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSectionJa;
