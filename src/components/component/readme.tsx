import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Markdown from "react-markdown";

export default function Readme() {
  return (
    <section>
      <div className="grid">
        <Card key={0}>
          <CardHeader key={11}>
            <h2 className="text-lg font-semibold">About me</h2>
          </CardHeader>
          <CardContent key={12} className="flex flex-col gap-y-3">
            <Markdown key={1} className="text-muted-foreground">
              🎓 **Graduated Magna Cum Laude** in **BS Computer Science** from
              the **University of Southern Philippines Foundation**.
            </Markdown>
            <Markdown key={2}>
              💻 I have a strong foundation in web development, particularly in
              **React**, **Node.js**, and **Next.js**, with expertise in
              **CakePHP**.
            </Markdown>
            <Markdown key={3}>
              🚀 Committed to continuously expanding my knowledge, currently
              focusing on **cloud technologies**.
            </Markdown>
            <Markdown key={4}>
              ## 📬 Contact Me - **📧 Email**:
              [tbaring_ccs@uspf.edu.ph](mailto:tbaring_ccs@uspf.edu.ph) - **🔗
              LinkedIn**: [Tyler Bert
              Baring](https://www.linkedin.com/in/tyler-bert-baring-156464270/)
            </Markdown>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
