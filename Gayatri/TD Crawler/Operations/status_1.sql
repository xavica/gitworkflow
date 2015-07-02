select categoryid, count(categoryid)
from ProductStage 
where cast (CreatedDate as DATE) = CAST(getdate() as DATE)
group by categoryid

select categoryid, count(categoryid)
from Product
where cast (CreatedDate as DATE) = CAST(getdate() as DATE)
group by categoryid

select categoryid, count(categoryid)
from Product
where cast (CreatedDate as DATE) = CAST(getdate() as DATE)and IsPublished = 1
group by categoryid

