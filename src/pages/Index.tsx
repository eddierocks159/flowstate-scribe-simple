
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, ListTodo, Calendar, LayoutDashboard } from "lucide-react";

const features = [
  {
    title: "Documents",
    description: "Create and edit beautiful documents with minimal formatting.",
    icon: FileText,
    color: "bg-flowstate-blue",
    link: "/documents"
  },
  {
    title: "Tasks",
    description: "Stay on top of your work with simple task management.",
    icon: ListTodo,
    color: "bg-flowstate-purple",
    link: "/tasks"
  },
  {
    title: "Calendar",
    description: "Plan your schedule and never miss important deadlines.",
    icon: Calendar,
    color: "bg-flowstate-gray",
    link: "/calendar"
  },
  {
    title: "Boards",
    description: "Visualize workflows with customizable Kanban boards.",
    icon: LayoutDashboard,
    color: "bg-flowstate-blue",
    link: "/boards"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold no-underline text-foreground">
            FlowState
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/documents">
              <Button variant="ghost">Demo</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Focus on your work, not your tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              FlowState is a clean, minimal productivity app that helps you organize 
              your thoughts, tasks, and projects in one beautiful workspace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/documents">
                <Button size="lg">
                  Try FlowState
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Everything you need, nothing you don't
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Link 
                  to={feature.link} 
                  key={index} 
                  className="group no-underline"
                >
                  <div className="bg-card rounded-lg p-6 flex gap-4 h-full shadow-sm hover:shadow-md transition-shadow duration-200 card-hover">
                    <div className={`${feature.color} p-3 rounded-md h-fit`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start organizing your work with FlowState today.
            </p>
            <Link to="/documents">
              <Button size="lg">
                Try FlowState Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 FlowState. A minimal productivity app.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
