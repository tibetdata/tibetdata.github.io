

#Read dataset
si <- read.csv('/Users/jigdelkuyee/workspace/tibetdata/projects/selfimmolationData/selfimmolationSeparate.csv')
head(si, 3)

# Plot
library(ggplot2)
library(scales)

summary(si)
str(si)

# Convert dates
si$dates <- as.Date(si$protest_date, "%Y-%m-%d")
str(si)
summary(si$dates)
ggplot(aes(x=dates), data=si) +
  geom_bar(aes(color=gender)) + 
  scale_x_date(labels=date_format("%b"), breaks="3 month") +
  theme(axis.text.x = element_text(angle=90)) +
  scale_fill_brewer(palette = "Set1")
  #facet_grid(~gender, 1)

head(si,5)
