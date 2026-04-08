class MyStorage {
  private whichStorage: Storage
  constructor(whichStorage: 'localStorage' | 'sessionStorage' = 'localStorage') {
    this.whichStorage = whichStorage === 'localStorage' ? localStorage : sessionStorage
  }

  setItem<T = any>(key: string, value: T) {
    try {
      const data = JSON.stringify(value)
      this.whichStorage.setItem(key, data)
    }
    catch (error) {
      console.error(`Storage setItem failed: ${key}`, error)
    }
  }

  getItem(key: string) {
    const data = this.whichStorage.getItem(key)
    if (!data) {
      return null
    }
    try {
      return JSON.parse(data)
    }
    catch {
      return data
    }
  }

  removeItem(key: string) {
    this.whichStorage.removeItem(key)
  }

  clear() {
    this.whichStorage.clear()
  }
}

export const local = new MyStorage('localStorage')
export const session = new MyStorage('sessionStorage')
