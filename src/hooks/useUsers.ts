// useUsers.ts
import { useState, useEffect } from 'react';
import { indexedDBService} from '../dB/indexedDBService';
import { User } from '../types/types';

const filterUserData = (data: any): User => ({
    id: data.id,
    createdAt: data.createdAt,
    lastActiveDate: data.lastActiveDate,
    userName: data.userName,
    orgName: data.orgName,
    email: data.email,
    phoneNumber: data.phoneNumber
  });
  

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // First, try to get users from IndexedDB
        const cachedUsers = await indexedDBService.getUsers();
        if (cachedUsers.length > 0) {
          setUsers(cachedUsers);
          setLoading(false);
          return;
        }

        // If no cached users, fetch from API
        const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
           const rawData = await response.json();
        // const fetchedUsers: User[] = await response.json();

        const fetchedUsers: User[] = Array.isArray(rawData) 
        ? rawData.map(filterUserData) 
        : [filterUserData(rawData)];
        

        // Store fetched users in IndexedDB
        await indexedDBService.addUsers(fetchedUsers);

        setUsers(fetchedUsers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};