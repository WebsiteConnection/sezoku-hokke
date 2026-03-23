import { FileText, Play, BookOpen, Heart, Globe, Award } from "lucide-react";

const resources = [
{
  title: "A brief introductory video",
  description: "Watch an eight-minute slide presentation on the teachings introduced in the original journal article",
  icon: Play,
  url: "https://drive.google.com/file/d/18NtS37Qcz4Xy9fScUj4Qsv80Kzjr_Wgz/view?usp=drive_link"
},
{
  title: "An Ultimate from Immanence",
  description: "Read the latest version of the original journal article",
  icon: BookOpen,
  url: "https://drive.google.com/file/d/1M2Kc9GLZWDJmpXlAOyyQ9h-qNlEe-tnY/view?usp=drive_link"
},
{
  title: "A reading of the above article",
  description: "Listen to a narrated version of 'An Ultimate from Immanence'",
  icon: FileText,
  url: "https://drive.google.com/file/d/1tY41QAOXcn7ffA2SYXjuykRv1H3DSp36/view?usp=drive_link"
},
{
  title: "Secular Prayers",
  description: "Consider how traditional prayers can be adapted for a secular worldview",
  icon: Heart,
  url: "https://drive.google.com/file/d/1ixOBFVsgtR3TXvIBuMtoQQvQu1PrPR76/view?usp=drive_link"
},
{
  title: "Secular Buddhist Network article",
  description: "Focuses on how these teachings differ from other forms of Secular Buddhism",
  icon: Globe,
  url: "https://drive.google.com/file/d/1cb2xofZI_IoETYXoPyzAZAUNh1V1JQC7/view?usp=drive_link"
},
{
  title: "Grawemeyer Award nomination",
  description: "Recommended for contributions to religious thought",
  icon: Award,
  url: "https://drive.google.com/file/d/13UiGjXitxICfhJoHzKUo-LTWgTzaQOEn/view?usp=drive_link"
}];


const ResourcesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-4">
          Explore the Teachings
        </h2>
        <p className="font-body text-muted-foreground text-center mb-14 max-w-lg mx-auto">
          ​
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) =>
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
            
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

};

export default ResourcesSection;