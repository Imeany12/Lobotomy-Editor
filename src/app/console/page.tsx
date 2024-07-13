"use client"
import { Input } from "@/components/ui/input";
import { transcribe } from "./transcriber";

 function brainrot (event: React.ChangeEvent<HTMLInputElement>){
    const newText = event.target.value;
    console.log(transcribe(newText));
  };


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input type="text" placeholder="Please type your command here" onChange={brainrot}/>
    </div>
  );
}
