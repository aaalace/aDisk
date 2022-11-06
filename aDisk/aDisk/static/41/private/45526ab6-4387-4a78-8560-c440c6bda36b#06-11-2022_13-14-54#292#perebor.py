with open('27-A.txt') as f:
    t = [int(x) for x in f.read().splitlines()]
    c = 0
    for i in range(len(t)):
        for j in range(len(t)):
            if i != j:
                if (t[i] + t[j]) % 3 == 0 and (t[i] * t[j]) % 1024 == 0:
                    c += 1
print(c // 2)
