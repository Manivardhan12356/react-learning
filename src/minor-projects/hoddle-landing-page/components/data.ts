import { consversations, grow, users } from "../../../assets";


export interface Illustrations {
   id: number;
   heading: string;
   text: string;
   image: string;
}

export const illustrationData: Illustrations[] = [
   {
      id: 1, heading: "Grow Together", text: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the sightful conversations you miss out on with a feedback form.",image:`${grow}`
   },
   {
      id: 2, heading: "Flowing Conversations", text: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",image:`${consversations}`
   },
   {
      id: 3, heading: "Your Users", text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app your users can start chatting immediately",image:`${users}`
   },
   
];
