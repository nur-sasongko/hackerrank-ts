Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

The STATION table is described as follows:

| Field | Type |
|-------|------|
| ID | NUMBER |
| CITY | VARCHAR2(21) |
| STATE | VARCHAR2(2) |
| LAT_N | NUMBER |
| LONG_W | NUMBER |

How it works:

COUNT(CITY) counts the total number of CITY entries (including duplicates).
COUNT(DISTINCT CITY) counts only the unique CITY values.
Subtracting the two gives you the number of "extra" (duplicate) entries — i.e., the difference between total and distinct counts.

Example: if CITY has values ['Delhi', 'Delhi', 'Mumbai', 'Pune', 'Pune', 'Pune']:

COUNT(CITY) = 6
COUNT(DISTINCT CITY) = 3
Difference = 3
