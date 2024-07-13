import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input type="text" placeholder="Please type your command here" />
    </div>
  );
}
