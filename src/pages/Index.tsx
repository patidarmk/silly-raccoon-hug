import { useState } from "react";
import { Trash2 } from "lucide-react";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoItem } from "@/components/todo/TodoItem";
import { TodoStats } from "@/components/todo/TodoStats";
import { TodoFilters } from "@/components/todo/TodoFilters";
import { useTodos } from "@/hooks/useTodos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MadeWithApplaa } from "@/components/made-with-applaa";

type FilterType = "all" | "active" | "completed";

const Index = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">My Todo List</CardTitle>
            <CardDescription className="text-center">
              Stay organized and productive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <TodoForm onAdd={addTodo} />
            
            <TodoStats 
              total={todos.length} 
              completed={completedCount} 
            />
            
            <div className="flex justify-between items-center">
              <TodoFilters 
                currentFilter={filter} 
                onFilterChange={setFilter} 
              />
              {completedCount > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCompleted}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Completed
                </Button>
              )}
            </div>

            <div className="space-y-2">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  {filter === "all" && "No todos yet. Add one above!"}
                  {filter === "active" && "No active todos. Great job!"}
                  {filter === "completed" && "No completed todos yet."}
                </div>
              ) : (
                filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                ))
              )}
            </div>
          </CardContent>
        </Card>
        
        <MadeWithApplaa />
      </div>
    </div>
  );
};

export default Index;