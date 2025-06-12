
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Map, TrendingUp } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Globe,
    title: "Welcome to",
    subtitle: "A Lifestyle",
    description: "Travel planning with our client dashboard. Enjoy a personalized experience as you explore a wide range of destinations.",
    color: "travel-purple",
    bgGradient: "from-travel-purple-500 to-travel-purple-700",
    stat: "99.9% Success",
  },
  {
    id: 2,
    icon: Map,
    title: "Discover New",
    subtitle: "Destinations",
    description: "Explore destinations with our data and trained AI models to experience with professional travel agency.",
    color: "travel-blue",
    bgGradient: "from-travel-blue-500 to-travel-blue-700",
    stat: "500k+ Places",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Elevate Your",
    subtitle: "Experience",
    description: "Travel planning prioritizing accessibility and value to your needs to create unforgettable memories.",
    color: "travel-orange",
    bgGradient: "from-travel-orange-500 to-travel-orange-700",
    stat: "50M+ Users",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => {
        const IconComponent = feature.icon;
        return (
          <Card
            key={feature.id}
            className={`bg-gradient-to-br ${feature.bgGradient} text-white p-8 border-0 card-shadow hover:scale-105 transition-transform duration-300 cursor-pointer group`}
          >
            <div className="mb-6">
              <IconComponent className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
              <h4 className="text-xl font-semibold mb-4 opacity-90">{feature.subtitle}</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs opacity-75 uppercase tracking-wide">Statistics</p>
                <p className="font-bold text-lg">{feature.stat}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FeatureCards;
