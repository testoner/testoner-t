import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function createGroupOptions(groups){
  let res = [];
  groups.forEach((group) => {
    res.push({name: group[0],options: group[1]});
  })
  return res;
}