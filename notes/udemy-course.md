# Rendering Lists

Rendering a large number of items is very bad for performance and memory usage. You don't want to render the items at the bottom of a large list until the user starts to scroll.

Mobile devices tend to be memory constrained

## React Native ListView

ListView is a component in React Native

* determines which items are currently visible and only renders the visible ones
* swaps out data in already rendered components (udemy "The Theory of ListView")

import { FlatList } from 'react-native'

<FlatList data = {} renderItem={} />


# Scaleable Navigation

## allow redux to handle state calculations

* call action creator

by convention, the names of action types are kept in a file called types.js in the actions folder
