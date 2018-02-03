import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  currentTitle: string = "";

  constructor() { }

  getTitle(): string {
    return this.currentTitle;
  }

  setTitle(newTitle: string) {
    this.currentTitle = newTitle;
  }

}
