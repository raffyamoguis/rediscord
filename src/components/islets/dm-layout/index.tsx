import Sidebar from "@/components/layout/sidebar";
import FindChatButton from "@/components/islets/find-chat-button";

import Header from "@/components/layout/header";
import DMHeaderMenu from "@/components/islets/dm-header-menu";
import DMChannelList from "@/components/islets/dm-channel-list";
import VoiceStatusFooter from "@/components/islets/voice-status-footer";

import { ListedDMChannel } from "@/lib/entities/channel";
import {
  MOCK_DELAY,
  MOCK_CHANNELS,
  generateRandomFakeChannels,
} from "@/lib/utils/mock";
import { delay } from "@/lib/utils";

export const channelsData: ListedDMChannel[] =
  generateRandomFakeChannels(MOCK_CHANNELS);

export const getData = async (): Promise<{ channels: ListedDMChannel[] }> => {
  await delay(MOCK_DELAY);
  return { channels: channelsData };
};

export default async function DMLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Sidebar className="bottom-70 flex flex-col">
        <Header verticalPadding="2" className="bg-midground">
          <FindChatButton />
        </Header>
        <div className="hover-scrollbar flex-1 overflow-y-auto py-2 pl-2 pr-0.5">
          <DMHeaderMenu />
          <DMChannelList channelsData={channelsData} />
        </div>
        <VoiceStatusFooter />
      </Sidebar>
      {children}
    </>
  );
}
