import { create } from "zustand"

//dont forgot set is a function && hook
//util folder is a reuseable code 

const useStore = create((set) => ({

  screen: 0 ,
  setScreenTo0: () => set((state) => ({screen: state.screen = 0 })),
  setScreenTo1: () => set((state) => ({screen: state.screen = 1 })),
  setScreenTo2: () => set((state) => ({screen: state.screen = 2 })),
  setScreenTo3: () => set((state) => ({screen: state.screen = 3 })),
  setScreenTo4: () => set((state) => ({screen: state.screen = 4 })),
  setScreenTo5: () => set((state) => ({screen: state.screen = 5 })),
  
  formData:{},
  setFormData: (presentData) => set((state) => ({ formData:{...state.formData, ...presentData } })), 
}))


export default useStore