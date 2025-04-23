
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
};

type TaskGroup = {
  id: string;
  name: string;
  tasks: Task[];
};

const TaskItem = ({ task, onToggle }: { task: Task; onToggle: () => void }) => {
  return (
    <div className="flex items-center space-x-3 py-2 animate-slide-in">
      <Checkbox checked={task.completed} onCheckedChange={onToggle} />
      <span className={cn(task.completed && "text-muted-foreground line-through")}>{task.text}</span>
    </div>
  );
};

const TaskList = ({ group, onToggleTask }: { group: TaskGroup; onToggleTask: (taskId: string) => void }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    // This would typically update the state and possibly send to an API
    console.log(`Adding task "${newTask}" to group "${group.name}"`);
    setNewTask("");
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <h3 className="text-xl font-medium">{group.name}</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {group.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => onToggleTask(task.id)}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Input
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />
          <Button size="icon" onClick={handleAddTask}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Tasks = () => {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([
    {
      id: "today",
      name: "Today",
      tasks: [
        {
          id: "task1",
          text: "Prepare presentation for meeting",
          completed: false,
          createdAt: "2025-04-23",
        },
        {
          id: "task2",
          text: "Review project proposal",
          completed: true,
          createdAt: "2025-04-23",
        },
        {
          id: "task3",
          text: "Send weekly report",
          completed: false,
          createdAt: "2025-04-23",
        },
      ],
    },
    {
      id: "upcoming",
      name: "Upcoming",
      tasks: [
        {
          id: "task4",
          text: "Call with client",
          completed: false,
          createdAt: "2025-04-24",
        },
        {
          id: "task5",
          text: "Team brainstorm session",
          completed: false,
          createdAt: "2025-04-25",
        },
      ],
    },
    {
      id: "backlog",
      name: "Backlog",
      tasks: [
        {
          id: "task6",
          text: "Update documentation",
          completed: false,
          createdAt: "2025-04-26",
        },
        {
          id: "task7",
          text: "Plan Q3 objectives",
          completed: false,
          createdAt: "2025-04-29",
        },
      ],
    },
  ]);

  const handleToggleTask = (groupId: string, taskId: string) => {
    setTaskGroups(
      taskGroups.map((group) => {
        if (group.id === groupId) {
          return {
            ...group,
            tasks: group.tasks.map((task) => {
              if (task.id === taskId) {
                return {
                  ...task,
                  completed: !task.completed,
                };
              }
              return task;
            }),
          };
        }
        return group;
      })
    );
  };

  return (
    <div className="flex-1 p-6 animate-fade-in">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Tasks</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {taskGroups.map((group) => (
            <TaskList
              key={group.id}
              group={group}
              onToggleTask={(taskId) => handleToggleTask(group.id, taskId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
