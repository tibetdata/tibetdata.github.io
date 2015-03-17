

#Read dataset
si <- read.csv('/Users/jigdelkuyee/workspace/tibetdata/projects/selfimmolationData/si_data_na.csv')
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
  geom_bar(aes(color=sex)) + 
  scale_x_date(labels=date_format("%Y-%b"), breaks="3 month") +
  theme(axis.text.x = element_text(angle=60)) +
  scale_fill_brewer(palette = "Set1")
  #facet_grid(~gender, 1)

# Line plot

ggplot(aes(x = age_mod), data = subset(si, !is.na(age_mod))) +
  geom_freqpoly(aes(color = sex)) +
  scale_x_continuous(limits = c(0, 30), breaks = seq(0, 30, 5)) +
  xlab('Age') + ylab('Count')

head(si,5)
