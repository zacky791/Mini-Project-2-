import { create } from "zustand"

//dont forgot set is a function && hook
//util folder is a reuseable code 

const useStore = create((set) => ({

  //FIXME - how to make better optimization ?
  screen: 0 ,
  setScreen0to1: () => set((state) => ({screen: state.screen + 1 })),
  setScreen1to2: () => set((state) => ({screen: state.screen + 1 })),
  setScreen1to3: () => set((state) => ({screen: state.screen + 2 })),
  setScreen2to1: () => set((state) => ({screen: state.screen - 1 })),
  setScreen3to1: () => set((state) => ({screen: state.screen - 2 })),
  setScreen2to4: () => set((state) => ({screen: state.screen + 2 })),
  setScreen3to4: () => set((state) => ({screen: state.screen + 1 })),
  setScreen4to2: () => set((state) => ({screen: state.screen - 2 })),
  setScreen4to5: () => set((state) => ({screen: state.screen + 1 })),
  setscreen5to1: () => set((state) => ({screen: state.screen - 5 })),
  
  formData:{},
  setFormData: (presentData) => set((state) => ({ formData:{...state.formData, ...presentData} })), 
}))


export default useStore