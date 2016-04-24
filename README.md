# cyclic-buffer
Using a scientific way of thinking to reverse engineer `push()/pop()` on Javascript arrays.

## A thinking model for science

In science, the following model is often used:
```
Observation ----> Theory
     ^              |
     |              v
 Experiment <-- Prediction
```

After an __observation__, you invent a __theory__. This theory gives you __predictions__ which can be testes with an __experiment__.
If the experiment fails, the theory is wrong. But, of course, if the experiment is a success, that only means that the theory is not yet wrong.


Let's apply this model on Javascript Arrays.

## Observation 1

> Doing a lot of `push()` and `pop()` on arrays is slow.

## Theory 1

> Each time you add an element to an array, the size of this array is increased and Javascript has to realloc more space in order to store this new element.

## Prediction 1

> If we use array with a big size and we just assign elements in empty cells instead of adding new cells, we must be faster.

## Experiment 1

[Test 1](https://tolokoban.github.io/cyclic-buffer)

## Observation 2

As we can see, the cyclic buffer is not faster when using numbers. This invalidate our first theory: there is no time spared allocating space for new cells in an array.

## Theory 2

> Pop is slow because the element is remove from memory by the garbage collector.

## Prediction 2

> If the ratio times are equal to the experiment 1 when we use strings instead of numbers, that will mean that deallocation if strings is not a problem.

## Experiment 2

[Test 2](https://tolokoban.github.io/cyclic-buffer)

## Observation 2

Times are almost the same in this experiment. But since we are slower pushing elements (as we saw in experiment 1), that means that there should be an issue with garbage collecting when poping.

Of course, this is another theory and the process will go on.

# Conclusion

This iterative model is the simpler way to refine your theory and get closer to the reality at each step. This is how you proceed when you want to reverse-engineer something or want to find a tricky bug or just increase a game performance.  
Of course, experimented programmers do this without expressing it: the model is hard-coded into their brain  ;-)



