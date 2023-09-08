import { HiTable, HiViewGrid } from 'react-icons/hi'

import { LibraryView } from '../enums'
import { MdViewList } from 'react-icons/md'

export const views = [
  { view: LibraryView.thumbnail, icon: HiViewGrid },
  { view: LibraryView.list, icon: MdViewList },
  { view: LibraryView.table, icon: HiTable },
]
