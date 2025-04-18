
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface GenreCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface GenreNavigationProps {
  categories: GenreCategory[];
  activeGenre: string;
  setActiveGenre: (id: string) => void;
}

const GenreNavigation: React.FC<GenreNavigationProps> = ({ 
  categories, 
  activeGenre, 
  setActiveGenre 
}) => {
  return (
    <>
      {/* Desktop navigation tabs */}
      <div className="hidden md:block mb-10">
        <Tabs defaultValue={activeGenre} value={activeGenre} onValueChange={setActiveGenre}>
          <TabsList className="flex-wrap">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex items-center gap-1"
              >
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile dropdown */}
      <div className="md:hidden mb-10">
        <Card className="p-3">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeGenre === category.id ? "default" : "outline"}
                  className="flex items-center gap-1"
                  onClick={() => setActiveGenre(category.id)}
                >
                  {category.icon}
                  <span className="text-xs">{category.name}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </>
  );
};

export default GenreNavigation;
