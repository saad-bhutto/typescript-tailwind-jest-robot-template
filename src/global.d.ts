import { Alpine as AlpineType } from 'alpinejs'

type Char ='e' | 'n' | 's' | 'w' | 'E' | 'N' | 'S' | 'W';

declare global {
  var Alpine: AlpineType
}