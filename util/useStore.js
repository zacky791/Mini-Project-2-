import { create } from "zustand"

const useStore = create((set) => ({

  screen: 0 ,
  setScreenTo0: () => set((state) => ({screen: state.screen = 0 })), //sign in form
  setScreenTo1: () => set((state) => ({screen: state.screen = 1 })), //roles to pick
  setScreenTo2: () => set((state) => ({screen: state.screen = 2 })), //tutor
  setScreenTo3: () => set((state) => ({screen: state.screen = 3 })), //guardian
  setScreenTo4: () => set((state) => ({screen: state.screen = 4 })), //display form
  setScreenTo5: () => set((state) => ({screen: state.screen = 5 })), //thank you form

  //for reset form
  resetFields: () => {
    set({formData: {} })
  },
  
  //for handling data structure for picture
  formData:{},
  setFormData: (presentData) => set((state) => ({ formData:{...state.formData, ...presentData } })), 
}))


export default useStore