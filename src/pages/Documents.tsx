
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useState } from "react";

type Document = {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
};

const DocumentEditor = ({ document }: { document?: Document }) => {
  const [title, setTitle] = useState(document?.title || "Untitled");
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="border-b py-3 px-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-medium bg-transparent border-none outline-none w-full"
          placeholder="Untitled"
        />
      </div>
      <div className="flex-1 p-4">
        <textarea
          className="w-full h-full min-h-[300px] bg-transparent border-none outline-none resize-none"
          placeholder="Start writing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
};

const DocumentCard = ({ document }: { document: Document }) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="pb-2">
        <div className="text-sm text-muted-foreground">{document.createdAt}</div>
        <div className="text-lg font-medium">{document.title}</div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {document.excerpt}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="ghost" size="sm" className="ml-auto">
          Open
        </Button>
      </CardFooter>
    </Card>
  );
};

const Documents = () => {
  const [activeView, setActiveView] = useState<"list" | "editor">("list");
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      title: "Getting Started with FlowState",
      excerpt: "Learn how to use FlowState to organize your work and boost productivity.",
      createdAt: "Apr 23, 2025",
    },
    {
      id: "2",
      title: "Meeting Notes",
      excerpt: "Notes from the project kickoff meeting. Key decisions and action items.",
      createdAt: "Apr 22, 2025",
    },
    {
      id: "3",
      title: "Ideas for Q2",
      excerpt: "Brainstorming new features and improvements for the next quarter.",
      createdAt: "Apr 20, 2025",
    },
  ]);

  return (
    <div className="flex-1 p-6">
      {activeView === "list" ? (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Documents</h1>
            <Button onClick={() => setActiveView("editor")}>
              <FileText className="h-4 w-4 mr-2" />
              New Document
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-md shadow-sm animate-fade-in">
          <DocumentEditor />
        </div>
      )}
    </div>
  );
};

export default Documents;
