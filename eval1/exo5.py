def fizzbuzz(nb_iterations):
    for n in range(1, nb_iterations + 1):
        if n % 3 == 0 and n % 5 == 0:
            print("FizzBuzz")
        elif n % 3 == 0:
            print("Fizz")
        elif n % 5 == 0:
            print("Buzz")
        else:
            print(n)

nb_iterations = int(input("nombre d'itérations "))

fizzbuzz(nb_iterations)
