# cyclic-buffer
Study on the gain of speed of a Cyclic Buffer versus a standard array.

## A thinking model for science

In science, the following model is often used:
```
Observation ----> Theory
     ^              |
     |              v
 Experiment <-- Prediction
```

After an __observation__, you invent a __theory__. This theory gives you __predictions__ which can be testes with an __experiment__.
If the experiment fails, the theory is wrong.


Let's apply this model on Javascript Arrays.

## Observation

> Doing a lot of `push()` and `pop()` on arrays is slow.

## Theory 1

> Each time you add an element to an array, the size of this array is increased and Javascript has to realloc more space in order to store this new element.

## Prediction 1

> If we use array with a big size and we just assign elements in empty cells instead of adding new cells, we must be faster.

## Experiment 1

[Experiment the theory](https://tolokoban.github.io/cyclic-buffer)

As we can see, the cyclic buffer is not faster when using numbers.


