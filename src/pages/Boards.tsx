
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type BoardCard = {
  id: string;
  title: string;
  description?: string;
  color?: string;
};

type BoardColumn = {
  id: string;
  title: string;
  cards: BoardCard[];
};

const CardItem = ({ card }: { card: BoardCard }) => {
  return (
    <div 
      className={cn(
        "p-3 mb-2 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 animate-slide-in",
        card.color ? `bg-${card.color}-50` : "bg-white"
      )}
    >
      <h4 className="font-medium">{card.title}</h4>
      {card.description && (
        <p className="text-sm text-muted-foreground mt-1">{card.description}</p>
      )}
    </div>
  );
};

const BoardColumnComponent = ({ column }: { column: BoardColumn }) => {
  const [newCard, setNewCard] = useState("");

  const handleAddCard = () => {
    // Would typically update state and possibly send to an API
    console.log(`Adding card "${newCard}" to column "${column.title}"`);
    setNewCard("");
  };

  return (
    <div className="bg-secondary rounded-md p-3 min-w-[280px] max-w-[280px]">
      <h3 className="font-medium mb-3">{column.title}</h3>
      <div>
        {column.cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <Input 
          placeholder="Add a card..." 
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
          className="bg-white"
        />
        <Button 
          size="sm" 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={handleAddCard}
        >
          <Plus className="h-4 w-4 mr-1" /> Add card
        </Button>
      </div>
    </div>
  );
};

const Boards = () => {
  const [columns, setColumns] = useState<BoardColumn[]>([
    {
      id: "col1",
      title: "To Do",
      cards: [
        {
          id: "card1",
          title: "Research competitors",
          description: "Gather information about similar products in the market",
        },
        {
          id: "card2",
          title: "Draft product requirements",
        }
      ]
    },
    {
      id: "col2",
      title: "In Progress",
      cards: [
        {
          id: "card3",
          title: "Create wireframes",
          description: "Design initial mockups for key screens",
        },
        {
          id: "card4",
          title: "User interviews",
          description: "Talk to 5 potential users to validate ideas",
        }
      ]
    },
    {
      id: "col3",
      title: "Done",
      cards: [
        {
          id: "card5",
          title: "Project kickoff",
          description: "Initial meeting with team",
        }
      ]
    }
  ]);

  return (
    <div className="flex-1 p-6 animate-fade-in">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Boards</h1>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-full">
            {columns.map(column => (
              <BoardColumnComponent key={column.id} column={column} />
            ))}
            <Button variant="outline" className="min-w-[280px] h-12">
              <Plus className="h-5 w-5 mr-2" /> Add column
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
