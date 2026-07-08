Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

Input Format

| Column | Type |
|--------|--------|
| ID | Integer |
| Name | String |
| Marks | Integer |

The STUDENTS table is described as follows:  The Name column only contains uppercase (A-Z) and lowercase (a-z) letters.

Sample Input

| ID | Name | Marks |
|----|--------|------:|
| 1 | Ashley | 81 |
| 2 | Samantha | 75 |
| 4 | Julia | 76 |
| 3 | Belvet | 84 |

Sample Output
```
Ashley
Julia
Belvet
```

Explanation

Only Ashley, Julia, and Belvet have Marks > 75. If you look at the last three characters of each of their names, there are no duplicates and 'ley' < 'lia' < 'vet'.

## Answers

This is the classic HackerRank "Higher Than 75 Marks" problem, where the threshold is Marks > 75.

```sql
SELECT Name
FROM STUDENTS
WHERE Marks > 75
ORDER BY RIGHT(Name, 3), ID;
```

**How it works:**
- `WHERE Marks > 75` → filters to only students scoring above 75.
- `RIGHT(Name, 3)` → extracts the last three characters of each name to sort by.
- `ORDER BY RIGHT(Name, 3), ID` → primary sort by those last three characters (alphabetically), secondary sort by `ID` ascending to break ties.

**Alternative using `SUBSTRING` (if `RIGHT` isn't supported, e.g., older Oracle):**
```sql
SELECT Name
FROM STUDENTS
WHERE Marks > 75
ORDER BY SUBSTRING(Name, LENGTH(Name) - 2, 3), ID;
```

**Note:** double-check the actual threshold value your platform expects — this answer assumes the standard "75" version of the problem. If your version specifies a different marks cutoff, just swap that number into the `WHERE` clause.