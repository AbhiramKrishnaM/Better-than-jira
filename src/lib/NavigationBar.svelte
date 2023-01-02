<nav class="w-1/5 h-screen bg-slate-100/40 border-r border-slate-200  py-10 flex flex-col">

    <div id="user-info" class="w-full h-16 px-8 flex items-center justify-between">
        <div id="avatar-image" class="h-16 w-16 rounded-full drop-shadow-xl bg-contain bg-[url(@/static/man.png)]"></div>
        <div id="info " class="text-slate-900/70">
            <h1 class="text-lg font-bold leading-none ">Abhiram Krishna</h1>
            <span class="text-sm">Full Stack Engineer</span>
        </div>
    </div>

    <div class="mt-8">
        <h6 class="text-slate-900/70 px-8 text-base font-medium">Menu</h6>

        <ul class="mt-1 flex flex-col gap-2">
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
                <Inbox />
                My Tasks
            </li>
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
        <Message />
                Inbox
            </li>
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
                <Work />
                Projects
            </li>
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
                <Time/> Standups</li>
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
                <Calendar/>
                Meetings</li>
            <li class="py-3  px-8   cursor-pointer  text-gray-500/70 flex items-center gap-3">
                <Settings/>
                Settings</li>

        </ul>
    </div>
   
</nav>


<script>
// @ts-ignore
import Inbox from '@/static/icons/inbox.svelte'
// @ts-ignore
import Message from "@/static/icons/message.svelte"
// @ts-ignore
import Work from "@/static/icons/work.svelte"
// @ts-ignore
import Time from "@/static/icons/time.svelte"
// @ts-ignore
import Calendar from "@/static/icons/calendar.svelte"
// @ts-ignore
import Settings from "@/static/icons/settings.svelte"

</script>

