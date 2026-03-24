import { FileText, Play, BookOpen, Heart, Globe, Award, Headphones } from "lucide-react";

const resources = [
  {
    title: "紹介動画（英語）",
    description: "本論文で紹介されている教えについての8分間のスライドプレゼンテーションをご視聴いただけます。",
    icon: Play,
    url: "https://drive.google.com/file/d/18NtS37Qcz4Xy9fScUj4Qsv80Kzjr_Wgz/view?usp=drive_link"
  },
  {
    title: "内在からの究極",
    description: "インド国際仏教学術雑誌（IIJBS）に掲載されたオリジナル論文の最新版をお読みいただけます。",
    icon: BookOpen,
    url: "https://drive.google.com/file/d/1DV25M01MNvVrEjAj4A9v5yoU0ESxgd1T/view?usp=sharing",
  },
  {
    title: "論文の朗読（英語音声）",
    description: "「内在からの究極」のナレーション版をお聴きいただけます。",
    icon: Headphones,
    url: "https://drive.google.com/file/d/1tY41QAOXcn7ffA2SYXjuykRv1H3DSp36/view?usp=drive_link"
  },
  {
    title: "世俗的な祈り",
    description: "伝統的な仏教の典礼を、世俗的な世界観に合わせてどのように適応させるかを考察します。",
    icon: Heart,
    url: "https://drive.google.com/file/d/1gDc1oaHPlhOIbnTrhTV3ntTM0kd6YtpQ/view?usp=sharing",
  },
  {
    title: "セキュラー仏教ネットワーク",
    description: "これらの教えが、他の現代的なセキュラー仏教の形態とどのように異なるかに焦点を当てています。",
    icon: Globe,
    url: "https://drive.google.com/file/d/1EbT7dTw_JnYhhgHWqYkxFkElyvI42bVW/view?usp=drive_link",
  },
  {
    title: "グロマイヤー賞ノミネート",
    description: "2027年グロマイヤー賞（宗教部門）へのノミネートに関する詳細です。",
    icon: Award,
    url: "https://drive.google.com/file/d/1K2P8tYJ8jySWwSdpJvvBAh6va9DcwoLw/view?usp=drive_link",
  },
];

const ResourcesSectionJa = () => {
  return (
    <section className="py-20 px-6 bg-background/50" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4" style={{ fontWeight: 300 }}>
          この教えを知る
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm leading-relaxed italic">
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
