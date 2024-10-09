import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { User } from '../types/types';

interface MyDB extends DBSchema {
    users: {
        key: number;
        value: User;
        indexes: { 'by-id': number };
    };
}

class IndexedDBService {
    private dbName = 'MyAppDatabase';
    private dbVersion = 1;

    async openDB(): Promise<IDBPDatabase<MyDB>> {
        return openDB<MyDB>(this.dbName, this.dbVersion, {
            upgrade(db) {
                const userStore = db.createObjectStore('users', { keyPath: 'id' });
                userStore.createIndex('by-id', 'id');
            },
        });
    }

    async addUsers(users: User[]): Promise<void> {
        const db = await this.openDB();
        const tx = db.transaction('users', 'readwrite');
        const store = tx.objectStore('users');
        for (const user of users) {
            await store.put(user);
        }
        await tx.done;
    }

    async getUsers(): Promise<User[]> {
        const db = await this.openDB();
        const users =  await db.getAll('users');
        return users.sort((a, b) => a.id - b.id);
    }

    async getUserById(id: number): Promise<User | undefined> {
        const db = await this.openDB();
        return db.get('users', id);
    }
}

export const indexedDBService = new IndexedDBService();

// export { User };
