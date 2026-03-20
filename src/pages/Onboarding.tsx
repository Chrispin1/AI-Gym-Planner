import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../hooks/useAuth";
import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { useState } from "react";
import { Textarea } from "../components/ui/TextArea";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Onboarding() {
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    daysPerWeek: "4",
    sessionLength: "60",
    equipment: "full_gym",
    injuries: "",
    preferredSplit: "full body",
  });

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const goalOptions = [
    {
      value: "bulk",
      label: "Build Muscle (Bulk)",
    },
    {
      value: "cut",
      label: "Lose fat (Cut)",
    },
    {
      value: "recomp",
      label: "Body Recomposition",
    },
    {
      value: "strength",
      label: "Build Strength",
    },
    {
      value: "endurance",
      label: "Improve Endurance",
    },
  ];

  const experienceOptions = [
    {
      value: "beginner",
      label: "Beginner (0-1 Years)",
    },
    {
      value: "intermediate",
      label: "Intermediate (1-3 Years)",
    },
    {
      value: "advanced",
      label: "Advanced (3+ Years)",
    },
  ];

  const daysOptions = [
    {
      value: "2",
      label: "2 days per week",
    },
    {
      value: "3",
      label: "3 days per week",
    },
    {
      value: "4",
      label: "4 days per week",
    },
    {
      value: "5",
      label: "5 days per week",
    },
    {
      value: "6",
      label: "6 days per week",
    },
  ];

  const session = [
    {
      value: "30",
      label: "30 minutes",
    },
    {
      value: "45",
      label: "45 minutes",
    },
    {
      value: "60",
      label: "60 minutes",
    },
    {
      value: "90",
      label: "90 minutes",
    },
  ];

  const equipmentOptions = [
    {
      value: "full_gym",
      label: "Full Gym Access",
    },
    {
      value: "home",
      label: "Home Gym",
    },
    {
      value: "dumbbells",
      label: "Dumbbells only",
    },
  ];

  const splitOptions = [
    {
      value: "full body",
      label: "Full Body Workout",
    },
    {
      value: "upper body",
      label: "Upper Body Workout",
    },
    {
      value: "leg day",
      label: "Leg Day",
    },
    {
      value: "custom",
      label: "Let the AI decide",
    },
  ];

  const { user } = useAuth();
  if (!user) {
    <RedirectToSignIn />;
  }

  async function handleQuestionnaire() {}

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          {/* progress indicator */}

          {/* 1. Questionnaire */}
          <Card variant="bordered">
            <h1 className="font-grotesque font-semibold text-2xl mb-2 text-white capitalize tracking-wider">
              Tell us about yourself
            </h1>
            <p className="font-jost text-muted mb-6">
              Help us create the perfect plan for you
            </p>

            <form
              onSubmit={handleQuestionnaire}
              className="space-y-4 font-jost">
              <Select
                id="goal"
                value={formData.goal}
                options={goalOptions}
                label="What is your primary goal?"
                onChange={(e) => updateForm("goal", e.target.value)}></Select>
              <Select
                id="experience"
                value={formData.experience}
                options={experienceOptions}
                label="Training experience"
                onChange={(e) =>
                  updateForm("experience", e.target.value)
                }></Select>
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  id="daysPerWeek"
                  value={formData.daysPerWeek}
                  options={daysOptions}
                  label="Days per week"
                  onChange={(e) =>
                    updateForm("daysPerWeek", e.target.value)
                  }></Select>
                <Select
                  id="gsessionLengthoal"
                  value={formData.sessionLength}
                  options={session}
                  label="Session"
                  onChange={(e) =>
                    updateForm("sessionLength", e.target.value)
                  }></Select>
              </div>
              <Select
                id="equipment"
                value={formData.equipment}
                options={equipmentOptions}
                label="Equipment Access"
                onChange={(e) =>
                  updateForm("sessionLength", e.target.value)
                }></Select>
              <Select
                id="preferredSplit"
                value={formData.preferredSplit}
                options={splitOptions}
                label="Preferred training split"
                onChange={(e) =>
                  updateForm("preferredSplit", e.target.value)
                }></Select>
              <Textarea
                id="injuries"
                label="any injuries or limitations (optional)"
                placeholder="Eg: Lower Back Issues, Shoulder dislocation"
                rows={3}
                onChange={(e) =>
                  updateForm("injuries", e.target.value)
                }></Textarea>
              <div className="flex pt-3 gap-3">
                <Button type="submit" className=" flex-1 gap-2 font-grotesque">
                  Generate my plan <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </Card>

          {/* 2. Generating */}
        </div>
      </div>
    </SignedIn>
  );
}
