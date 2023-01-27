import { create } from 'zustand'

//dont forgot set is a function && hook
//util folder is a reuseable code 

const useStore = create((set) => ({
  formData:{},
  setFormData: (presentData) => set((state) => ({ formData:[...state.formData,presentData] })), 
}))

