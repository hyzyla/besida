import React from 'react'

import { User } from '../client'

export const UserContext = React.createContext<User | null>(null)
