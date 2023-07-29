import { create } from 'zustand'
import { TypeUser } from '../types/types';
import loadUserData from '../utils/loadUserData';

export interface UserStore {
  userData: TypeUser | "Cargando...";
  loadUserData: () => void;
}

export const useUserStore = create<UserStore>()(set => {
  type typeUserDataFromLocalStorage = {
    email: string;
    firstName: string;
    idPhoto: number;
    idUser: number;
    idUserAddress: number;
    lastName: string;
    password: string;
    phone: string;
    role: { name: string };
    user: string;
  }
  return ({ 
    userData: "Cargando...",
    loadUserData: async () => {
    await loadUserData()
      .then(() => {
        const loadUserDataFromLocalStorage = localStorage.getItem("userData");
        if(loadUserDataFromLocalStorage){
          const loadUserData: typeUserDataFromLocalStorage = JSON.parse(loadUserDataFromLocalStorage);
          const newState: UserStore = { 
            userData: {
              email: loadUserData.email,
              firstName: loadUserData.firstName,
              phone: Number(loadUserData.phone),
              lastName: loadUserData.lastName,
              role: loadUserData.role.name,
              user: loadUserData.user
            }, 
            loadUserData: () => undefined,
          }
          set(() => newState)
        }
      })
      .catch(error => console.log(error))
    }
  });
})