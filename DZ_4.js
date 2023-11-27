let year = prompt()
if (typeof(year) != Number || year < 0)
{
    console.log("Error");
}
else
{
    if (year == 1)
    {
        console.log(year + " рік");
    }
    else if (year == 2 || year ==3 || year == 4)
    {
        console.log(year + " роки");
    }
    else
    {
        console.log(year + " років");
    }
}