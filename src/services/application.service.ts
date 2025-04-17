type Callback = () => void;

class ApplicationService {
  private _selectedTab: string = 'workspace';
  private listeners: Set<Callback> = new Set();

  get selectedTab() {
    return this._selectedTab;
  }

  setTab(tab: string) {
    if (this._selectedTab !== tab) {
      this._selectedTab = tab;
      this.listeners.forEach((cb) => cb());
    }
  }

  subscribe(callback: Callback): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
}

export default new ApplicationService();
