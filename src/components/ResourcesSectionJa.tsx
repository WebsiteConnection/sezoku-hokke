import React from "react";
import { FileText, Play, BookOpen, Heart, Globe, Award, Headphones } from "lucide-react";

const resources = [
  {
    title: "紹介動画",
    description: "本教えの概要を簡潔に説明した8分間のスライドプレゼンテーションをご覧ください。",
    icon: Play,
    url: "https://drive.google.com/file/d/18NtS37Qcz4Xy9fScUj4Qsv80Kzjr_Wgz/view?usp=drive_link"
  },
  {
    title: "『内在からの究極』",
    description: "2024年に初めて発表された学術論文の最新版をご覧いただけます。",
    icon: BookOpen,
    url: "https://drive.google.com/file/d/1M2Kc9GLZWDJmpXlAOyyQ9h-qNlEe-tnY/view?usp=drive_link"
  },
  {
    title: "音声朗読",
    description: "論文『内在からの究極』の朗読をお聞きいただけます。",
    icon: Headphones,
    url: "https://drive.google.com/file/d/1tY41QAOXcn7ffA2SYXjuykRv1H3DSp36/view?usp=drive_link"
  },
  {
    title: "世俗の祈り",
    description: <><em>『法華経』</em>に基づく伝統的な儀礼を、いかにして世俗的な世界観に適応させることができるかを考察します。</>,
    icon: Heart,
    url: "https://drive.google.com/file/d/1ixOBFVsgtR3TXvIBuMtoQQvQu1PrPR76/view?usp=drive_link"
  },
  {
    title: "世俗仏教ネットワークの記事",
    description: "本教えが他の形態の世俗仏教とどのように異なるのかに焦点を当てています。",
    icon: Globe,
    url: "https://drive.google.com/file/d/1cb2xofZI_IoETYXoPyzAZAUNh1V1JQC7/view?usp=drive_link"
  },
  {
    title: "グロマイヤー賞ノミネート",
    description: "2027年グロマイヤー賞（宗教部門）の推薦資料です。",
    icon: Award,
    url: "https://drive.google.com/file/d/13UiGjXitxICfhJoHzKUo-LTWgTzaQOEn/view?usp=drive_link"
  }
];

const ResourcesSectionJa = () => {
  return (
    <section className="py-20 px-6 bg-background/50" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4" style={{ fontWeight: 300, fontFamily: "'Noto Sans JP', sans-serif" }}>
  この教えを知る
</h2>

{/* Removed 'italic', kept 'text-sm' and 'leading-relaxed' for professional clarity */}
<p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
  【ご案内】以下のリンク先は、複雑な考察を含む内容となっております。現在、日本語表現の正確性を精査中ですが、その革新的な内容を鑑み、現時点で公開しております。
</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSectionJa;
