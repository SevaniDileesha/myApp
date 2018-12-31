import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { EmojiPanelComponent } from './emoji-panel/emoji-panel';
@NgModule({
	declarations: [ChatComponent,
    EmojiPanelComponent],
	imports: [],
	exports: [ChatComponent,
    EmojiPanelComponent]
})
export class ComponentsModule {}
