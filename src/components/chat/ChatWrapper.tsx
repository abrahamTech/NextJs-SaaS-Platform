import { trpc } from "@/app/_trpc/client";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

interface ChatWrapperProps {
    fileId: string
}

const ChatWrapper = ({fileId}: ChatWrapperProps) => {

    const {} = trpc.getFileUploadStatus.useQuery({
        fileId,
    })

    return (
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
            <div className="flex-1 justify-between flex flex-col mb-28">
                <Messages />
            </div>

            <ChatInput />
        </div>
    )
}   

export default ChatWrapper;