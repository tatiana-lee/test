select cols.id, cols.name,
subs.name as sub_name, subs.id as sub_id,
[dbo].[get_level](cols.subdivision_id) as sub_level,
(select count(*) from [testdb].[dbo].[collaborators] cols1
where cols1.subdivision_id = cols.subdivision_id) as colls_count
from [testdb].[dbo].[collaborators] cols
join [testdb].[dbo].[subdivisions] subs on cols.subdivision_id = subs.id
where cols.age < 40 and cols.subdivision_id not in (100055, 100059)
order by sub_level