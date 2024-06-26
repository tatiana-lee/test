USE [testdb]
GO
/****** Object:  UserDefinedFunction [dbo].[get_level]    Script Date: 6/15/2024 4:37:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER function [dbo].[get_level](@sub_id bigint)
returns int
as begin
	declare @lvl int;
	with tsubs as (
		select s.*, 0 as lvl from [testdb].[dbo].[subdivisions] s where s.id = @sub_id
		union all
		select sd.*, t.lvl+1 as gen FROM [testdb].[dbo].[subdivisions] sd
		inner join tsubs t on sd.id = t.parent_id)
	select top 1 @lvl=lvl from tsubs ts
	order by ts.lvl desc

	return (@lvl);
end;