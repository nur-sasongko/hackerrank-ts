Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

Input Format

The STATION table is described as follows:


| Field | Type |
|-------|------|
| ID | NUMBER |
| CITY | VARCHAR2(21) |
| STATE | VARCHAR2(2) |
| LAT_N | NUMBER |
| LONG_W | NUMBER |

**Answers**

```sql
SELECT DISTINCT CITY
FROM STATION
WHERE LOWER(SUBSTRING(CITY, 1, 1)) IN ('a', 'e', 'i', 'o', 'u');
```

**How it works:**
- `SUBSTRING(CITY, 1, 1)` extracts the first character of each city name.
- `LOWER(...)` normalizes case so it matches both uppercase and lowercase vowels.
- `IN ('a','e','i','o','u')` filters to only those starting with a vowel.
- `DISTINCT` removes duplicate city names from the result.

**Alternative using `LIKE` (works well in MySQL, case-insensitive by default there):**

```sql
SELECT DISTINCT CITY
FROM STATION
WHERE CITY LIKE 'A%' OR CITY LIKE 'E%' OR CITY LIKE 'I%'
   OR CITY LIKE 'O%' OR CITY LIKE 'U%';
```

**Alternative using `REGEXP` (MySQL/PostgreSQL):**

```sql
SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP '^[AEIOUaeiou]';
```

Note: `SUBSTRING` syntax can vary slightly by database — in SQL Server it's `SUBSTRING(CITY, 1, 1)` (same), in Oracle you'd typically use `SUBSTR(CITY, 1, 1)`. Let me know which database you're targeting if you want it tailored exactly.

In regex, `^` is the **start-of-string anchor**.

It means "this pattern must match starting at the very beginning of the string" — not anywhere in the middle.

**In your query:**
```sql
WHERE CITY REGEXP '^[AEIOUaeiou]'
```

- `^` → anchors the match to the start of `CITY`
- `[AEIOUaeiou]` → matches any single character that's a vowel (upper or lowercase)

So together, `'^[AEIOUaeiou]'` means: *"the first character of CITY must be a vowel."*

**Why the anchor matters — compare these two:**

```sql
CITY REGEXP '^[AEIOUaeiou]'   -- matches only if CITY STARTS with a vowel
CITY REGEXP '[AEIOUaeiou]'    -- matches if CITY CONTAINS a vowel ANYWHERE
```

Example with city name `"Delhi"`:
- `^[AEIOUaeiou]` → **no match** (starts with `D`)
- `[AEIOUaeiou]` → **match** (contains `e` and `i`)

So without the `^`, you'd get almost every city name back, since most contain a vowel somewhere — not what you want here.

**Bonus — the counterpart anchor is `$`**, which means "end of string." For example, `[AEIOUaeiou]$` would match city names *ending* in a vowel.
