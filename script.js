// ════════════════════════════════════════════════════════════
//  QUESTION BANK  —  5 sets × 125 questions
//  Sections: A=31, B=31, C=31, D=32
// ════════════════════════════════════════════════════════════
const SETS={
1:[
// ── A: Python Foundations (MCQ×20, MSQ×9, NAT×2)
{s:"A",type:"mcq",q:"What is the output of type(3.14) in Python?",o:["<class 'int'>","<class 'float'>","<class 'double'>","<class 'num'>"],c:1},
{s:"A",type:"mcq",q:"Which keyword defines a function in Python?",o:["func","define","def","function"],c:2},
{s:"A",type:"mcq",q:"Which of the following is a mutable data type?",o:["tuple","string","list","int"],c:2},
{s:"A",type:"mcq",q:"What does len() return?",o:["Last index","Memory size","Number of elements","Data type"],c:2},
{s:"A",type:"mcq",q:"Which symbol is used for single-line comments in Python?",o:["//","/*","#","--"],c:2},
{s:"A",type:"mcq",q:"What is the index of the first element in a Python list?",o:["1","-1","0","None"],c:2},
{s:"A",type:"mcq",q:"What will print(2**3) output?",o:["6","8","9","5"],c:1},
{s:"A",type:"mcq",q:"Which file extension is used for Python files?",o:[".pt",".py",".pyt",".pyth"],c:1},
{s:"A",type:"mcq",q:"What does 'AI' stand for?",o:["Automated Input","Artificial Intelligence","Automated Intelligence","Artificial Integration"],c:1},
{s:"A",type:"mcq",q:"Which loop is used when the number of iterations is known?",o:["while","do-while","for","repeat"],c:2},
{s:"A",type:"mcq",q:"How do you open a file for reading in Python?",o:["open('f','w')","open('f','r')","open('f','a')","open('f','x')"],c:1},
{s:"A",type:"mcq",q:"What does ML stand for?",o:["Machine Language","Machine Learning","Meta Learning","Model Learning"],c:1},
{s:"A",type:"mcq",q:"Which platform is commonly used for running Python notebooks online for free?",o:["GitHub","VS Code","Google Colab","Docker"],c:2},
{s:"A",type:"mcq",q:"What is a Python dictionary?",o:["Ordered list","Key-value pairs","Set of unique items","Stack structure"],c:1},
{s:"A",type:"mcq",q:"What is the result of 10 % 3?",o:["3","1","0","4"],c:1},
{s:"A",type:"mcq",q:"Which built-in function converts a string to an integer?",o:["str()","float()","int()","num()"],c:2},
{s:"A",type:"mcq",q:"In Git, which command initializes a new repository?",o:["git start","git new","git init","git create"],c:2},
{s:"A",type:"mcq",q:"What does GenAI stand for?",o:["General AI","Generative AI","Generic Artificial Intelligence","Genuine AI"],c:1},
{s:"A",type:"mcq",q:"Which Python keyword is used to handle exceptions?",o:["catch","handle","except","error"],c:2},
{s:"A",type:"mcq",q:"What does the range(5) function generate?",o:["1 to 5","0 to 5","0 to 4","1 to 4"],c:2},
{s:"A",type:"msq",q:"Which of the following are valid Python data types?",o:["int","float","list","char"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which of the following are features of Google Colab?",o:["Free GPU access","Local file system only","Notebook interface","Integration with Google Drive"],c:[0,2,3]},
{s:"A",type:"msq",q:"Which are valid ways to define a string in Python?",o:["'hello'",'"hello"',"'''hello'''","[hello]"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which of the following are Python control flow statements?",o:["if","for","while","print"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which Git commands are used for version control?",o:["git commit","git push","git run","git pull"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are differences between AI, ML, and GenAI?",o:["ML is a subset of AI","GenAI creates new content","AI only refers to robotics","GenAI is a subset of ML broadly"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which of the following are immutable types in Python?",o:["tuple","int","list","str"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are valid Python comparison operators?",o:["==","!=","<>",">="],c:[0,1,3]},
{s:"A",type:"msq",q:"What are valid uses of Python functions?",o:["Code reusability","Define custom logic","Replace all loops","Improve readability"],c:[0,1,3]},
{s:"A",type:"nat",q:"What is the output of: len([1, 2, 3, 4, 5])?",c:"5"},
{s:"A",type:"nat",q:"What is the value of 2 ** 4 in Python?",c:"16"},
// ── B: Data Handling, SQL & EDA (MCQ×20, MSQ×9, NAT×2)
{s:"B",type:"mcq",q:"Which Python library is primarily used for data manipulation with DataFrames?",o:["NumPy","Matplotlib","Pandas","Seaborn"],c:2},
{s:"B",type:"mcq",q:"What does SQL stand for?",o:["Structured Query Language","Simple Query Language","Secure Query Logic","Standard Query List"],c:0},
{s:"B",type:"mcq",q:"Which SQL clause filters rows?",o:["GROUP BY","ORDER BY","WHERE","HAVING"],c:2},
{s:"B",type:"mcq",q:"What does EDA stand for?",o:["Exploratory Data Analysis","Extended Data Architecture","External Data Access","Enhanced Data Analysis"],c:0},
{s:"B",type:"mcq",q:"Which pandas method shows the first 5 rows of a DataFrame?",o:["tail()","show()","head()","display()"],c:2},
{s:"B",type:"mcq",q:"Which NumPy function creates an array of zeros?",o:["np.ones()","np.zeros()","np.empty()","np.full()"],c:1},
{s:"B",type:"mcq",q:"In pandas, how do you select a column named 'age'?",o:["df['age']","df.get('age')","df.col('age')","df.select('age')"],c:0},
{s:"B",type:"mcq",q:"Which SQL keyword removes duplicate rows in a SELECT result?",o:["UNIQUE","DISTINCT","FILTER","REMOVE"],c:1},
{s:"B",type:"mcq",q:"Which pandas method checks for missing values?",o:["df.missing()","df.isnull()","df.isna()","Both isnull() and isna()"],c:3},
{s:"B",type:"mcq",q:"What does a pivot table do?",o:["Deletes rows","Reshapes data to summarize values","Merges two tables","Filters rows by condition"],c:1},
{s:"B",type:"mcq",q:"Which matplotlib function creates a line plot?",o:["plt.bar()","plt.scatter()","plt.plot()","plt.hist()"],c:2},
{s:"B",type:"mcq",q:"What is the purpose of the pandas groupby() method?",o:["Sort data","Group data and apply aggregation","Filter rows","Merge DataFrames"],c:1},
{s:"B",type:"mcq",q:"Which SQL aggregate function counts rows?",o:["SUM()","AVG()","COUNT()","MAX()"],c:2},
{s:"B",type:"mcq",q:"What does df.shape return in pandas?",o:["Column names","Data types","(rows, columns) tuple","Memory usage"],c:2},
{s:"B",type:"mcq",q:"Which method fills missing values in a pandas DataFrame?",o:["df.remove()","df.fill()","df.fillna()","df.replace_na()"],c:2},
{s:"B",type:"mcq",q:"What is a JOIN in SQL?",o:["Combines rows from two tables","Deletes duplicate rows","Creates a new table","Sorts data"],c:0},
{s:"B",type:"mcq",q:"Which library in Python is used for advanced visualizations similar to ggplot?",o:["Matplotlib","Seaborn","Plotly","All of the above"],c:3},
{s:"B",type:"mcq",q:"What does df.describe() provide?",o:["Shape of DataFrame","Summary statistics","Column data types","First 5 rows"],c:1},
{s:"B",type:"mcq",q:"XLOOKUP is a function in which tool?",o:["Python","SQL","Excel","Pandas"],c:2},
{s:"B",type:"mcq",q:"Which pandas method merges two DataFrames?",o:["df.combine()","df.join_all()","pd.merge()","df.concat_all()"],c:2},
{s:"B",type:"msq",q:"Which are valid SQL clauses?",o:["SELECT","FROM","PUSH","WHERE"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which pandas operations handle missing data?",o:["fillna()","dropna()","isnull()","append()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are types of JOIN in SQL?",o:["INNER JOIN","OUTER JOIN","CROSS JOIN","RANDOM JOIN"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which NumPy array operations are valid?",o:["Broadcasting","Indexing","Slicing","Plotting"],c:[0,1,2]},
{s:"B",type:"msq",q:"What does EDA typically involve?",o:["Visualising distributions","Checking for missing values","Training models","Identifying outliers"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which are valid matplotlib plot types?",o:["plt.hist()","plt.scatter()","plt.pie()","plt.table()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are correct about pandas DataFrame indexing?",o:["df.loc[] uses labels","df.iloc[] uses integer positions","df.loc[] uses integer positions","Both loc and iloc exist"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which steps are part of an EDA checklist?",o:["Check shape and dtypes","Visualize distributions","Build final model","Detect outliers"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which are valid SQL aggregate functions?",o:["COUNT()","SUM()","MERGE()","AVG()"],c:[0,1,3]},
{s:"B",type:"nat",q:"A DataFrame has 5 rows and 3 columns. What does df.shape[0] return?",c:"5"},
{s:"B",type:"nat",q:"What is np.mean([1,2,3,4,5])?",c:"3.0"},
// ── C: Regression, Trees & Clustering (MCQ×20, MSQ×9, NAT×2)
{s:"C",type:"mcq",q:"What type of problem does Linear Regression solve?",o:["Classification","Clustering","Regression","Dimensionality reduction"],c:2},
{s:"C",type:"mcq",q:"What does MAE stand for in ML metrics?",o:["Mean Absolute Error","Maximum Absolute Error","Mean Average Estimation","Model Accuracy Evaluation"],c:0},
{s:"C",type:"mcq",q:"Which algorithm uses a tree structure for classification?",o:["Linear Regression","Decision Tree","K-Means","PCA"],c:1},
{s:"C",type:"mcq",q:"What is the purpose of the train/test split?",o:["Increase data size","Evaluate model on unseen data","Reduce features","Normalize data"],c:1},
{s:"C",type:"mcq",q:"Which metric measures clustering quality?",o:["RMSE","F1 Score","Silhouette Score","R²"],c:2},
{s:"C",type:"mcq",q:"What does overfitting mean?",o:["Model is too simple","Model memorizes training data but fails on new data","Model has high bias","Model ignores training data"],c:1},
{s:"C",type:"mcq",q:"Which is the simplest baseline model for regression?",o:["Random Forest","Predict the mean","KNN","SVM"],c:1},
{s:"C",type:"mcq",q:"What does R² (R-squared) measure?",o:["Absolute error","Variance explained by the model","Number of features","Training time"],c:1},
{s:"C",type:"mcq",q:"What is cross-validation used for?",o:["Feature selection","Reliable model performance estimate","Data cleaning","Increasing dataset size"],c:1},
{s:"C",type:"mcq",q:"Which scaling method maps values to [0,1]?",o:["StandardScaler","RobustScaler","MinMaxScaler","Normalizer"],c:2},
{s:"C",type:"mcq",q:"What is the purpose of regularization?",o:["Speed up training","Prevent overfitting by penalizing complexity","Remove missing values","Increase model accuracy"],c:1},
{s:"C",type:"mcq",q:"Which ML problem type predicts a category?",o:["Regression","Classification","Clustering","Dimensionality reduction"],c:1},
{s:"C",type:"mcq",q:"What does RMSE stand for?",o:["Root Mean Squared Error","Random Model Score Evaluation","Root Model Selection Error","Relative Mean Squared Estimate"],c:0},
{s:"C",type:"mcq",q:"Which ensemble method combines many decision trees?",o:["Linear Regression","K-Means","Random Forest","PCA"],c:2},
{s:"C",type:"mcq",q:"What is the K in K-Means?",o:["Number of features","Number of clusters","Number of iterations","Kernel size"],c:1},
{s:"C",type:"mcq",q:"Which metric is best for imbalanced classification?",o:["Accuracy","F1 Score","RMSE","R²"],c:1},
{s:"C",type:"mcq",q:"What is a confusion matrix used for?",o:["Visualizing data distribution","Evaluating classification results","Feature engineering","Scaling data"],c:1},
{s:"C",type:"mcq",q:"What is feature engineering?",o:["Deleting features","Creating new features from existing data","Normalizing features","Selecting the best model"],c:1},
{s:"C",type:"mcq",q:"Which is a hyperparameter of a Decision Tree?",o:["Training loss","Max depth","Gradient","Bias"],c:1},
{s:"C",type:"mcq",q:"What does the term 'bias' refer to in ML?",o:["Model complexity","Error from wrong assumptions","Random error","Training data size"],c:1},
{s:"C",type:"msq",q:"Which are valid regression metrics?",o:["MAE","RMSE","R²","F1 Score"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are steps in the ML workflow?",o:["Problem framing","Data preprocessing","Model training","Evaluation"],c:[0,1,2,3]},
{s:"C",type:"msq",q:"Which are classification algorithms?",o:["Logistic Regression","Decision Tree","K-Means","Random Forest"],c:[0,1,3]},
{s:"C",type:"msq",q:"What does data preprocessing include?",o:["Handling missing values","Feature scaling","Model deployment","Encoding categorical variables"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are regularization techniques?",o:["L1 (Lasso)","L2 (Ridge)","Dropout","Mean imputation"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about Random Forest?",o:["It's an ensemble method","It uses multiple decision trees","It can overfit easily","It handles missing values in some implementations"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which metrics evaluate classification?",o:["Accuracy","Precision","Recall","RMSE"],c:[0,1,2]},
{s:"C",type:"msq",q:"What are valid approaches to handle class imbalance?",o:["Oversampling minority class","Undersampling majority class","Ignoring the problem","Using F1 Score instead of accuracy"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are hyperparameters of Random Forest?",o:["Number of trees","Max features","Training loss","Max depth"],c:[0,1,3]},
{s:"C",type:"nat",q:"In a binary confusion matrix: TP=50, FP=10, FN=5, TN=35. What is the total number of predictions?",c:"100"},
{s:"C",type:"nat",q:"A model predicts [2,4,6] and actuals are [2,4,6]. What is the MAE?",c:"0"},
// ── D: GenAI, LLMs & RAG (MCQ×20, MSQ×10, NAT×2)
{s:"D",type:"mcq",q:"What does LLM stand for?",o:["Large Language Model","Linear Learning Machine","Layered Language Mechanism","Large Labeled Model"],c:0},
{s:"D",type:"mcq",q:"What is a token in the context of LLMs?",o:["A security key","A unit of text (word or subword)","A training epoch","A layer in a neural network"],c:1},
{s:"D",type:"mcq",q:"What does RAG stand for?",o:["Retrieval-Augmented Generation","Random Access Generation","Recursive Attention Graph","Real-time AI Generator"],c:0},
{s:"D",type:"mcq",q:"What is the context window in an LLM?",o:["The screen where output shows","Maximum tokens an LLM can process at once","The training dataset size","The number of layers"],c:1},
{s:"D",type:"mcq",q:"What does temperature control in LLMs?",o:["Speed of response","Randomness/creativity of output","Model size","Memory usage"],c:1},
{s:"D",type:"mcq",q:"What is an embedding in NLP?",o:["A file compression","A dense numerical vector representation of text","An HTML attribute","A data join operation"],c:1},
{s:"D",type:"mcq",q:"What is a vector store used for in RAG?",o:["Storing model weights","Storing and searching embeddings","Training LLMs","Deploying APIs"],c:1},
{s:"D",type:"mcq",q:"What does FastAPI primarily help with?",o:["Data visualization","Building REST APIs in Python","Training ML models","Managing databases"],c:1},
{s:"D",type:"mcq",q:"What is LangChain used for?",o:["Database management","Building LLM-powered applications","Image processing","Data cleaning"],c:1},
{s:"D",type:"mcq",q:"What is a prompt in LLM context?",o:["A coding error","The input text sent to an LLM","A training technique","A loss function"],c:1},
{s:"D",type:"mcq",q:"What does 'chunking' mean in RAG?",o:["Breaking data into pieces for indexing","Compressing model weights","Deleting irrelevant data","Merging datasets"],c:0},
{s:"D",type:"mcq",q:"Which file format is commonly used for structured data exchange with APIs?",o:["CSV","JSON","XLSX","TXT"],c:1},
{s:"D",type:"mcq",q:"What is a system prompt in an LLM agent?",o:["Error message","Instructions that define the agent's behavior/persona","User's first message","Model architecture description"],c:1},
{s:"D",type:"mcq",q:"What does Pydantic help with in Python APIs?",o:["Plotting data","Data validation and settings management","Training models","Querying databases"],c:1},
{s:"D",type:"mcq",q:"What is semantic search?",o:["Searching by exact keywords","Searching by meaning/context using embeddings","Filtering by date","Searching file names"],c:1},
{s:"D",type:"mcq",q:"What is a 'hard stop' in an AI agent?",o:["Server crash","Limit on iterations/calls to prevent infinite loops","Stopping training","Deleting the agent"],c:1},
{s:"D",type:"mcq",q:"What is top-p (nucleus sampling)?",o:["Maximum number of tokens","Temperature setting","Sampling from top-p probability mass","Learning rate"],c:2},
{s:"D",type:"mcq",q:"What is Hugging Face Spaces used for?",o:["Database storage","Deploying and sharing ML demos","Writing Python code","Managing Git repos only"],c:1},
{s:"D",type:"mcq",q:"What is a retriever in RAG?",o:["A model that generates text","A component that fetches relevant documents","A data preprocessing step","An API endpoint"],c:1},
{s:"D",type:"mcq",q:"What does 'idempotent' mean in tool/API design?",o:["Runs faster each time","Same input always produces same result without side effects","Produces random output","Requires authentication"],c:1},
{s:"D",type:"msq",q:"Which are components of a RAG system?",o:["Embeddings","Vector store","Retriever","Language model"],c:[0,1,2,3]},
{s:"D",type:"msq",q:"Which factors affect LLM cost?",o:["Number of tokens","Model size","Temperature setting","Latency"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid LLM parameters?",o:["Temperature","Top-p","Max tokens","Learning rate"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about AI agents?",o:["They can use tools","They can retry on failure","They run without any instructions","They can call external APIs"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are features of FastAPI?",o:["Automatic API docs","Built-in data validation with Pydantic","Only supports GET requests","Async support"],c:[0,1,3]},
{s:"D",type:"msq",q:"What does a RAG eval harness typically measure?",o:["Answer correctness","Context recall","Model training speed","Retrieval precision"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid chunking strategies in RAG?",o:["Fixed-size chunks","Sentence-based chunks","Random deletion","Sliding window chunks"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid deployment platforms for ML demos?",o:["Hugging Face Spaces","Render","Local only","Streamlit Cloud"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are LangGraph concepts?",o:["Nodes","Transitions","Retries","SQL queries"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are best practices for LLM agent design?",o:["Structured JSON output","Hard stop limits","Unlimited retries","Idempotent tools"],c:[0,1,3]},
{s:"D",type:"nat",q:"An LLM has a context window of 8192 tokens. If a prompt uses 4096 tokens, how many tokens remain for the response?",c:"4096"},
{s:"D",type:"nat",q:"If a RAG system retrieves top-3 chunks for each query, and you run 10 queries, how many total chunks are retrieved?",c:"30"}
],
2:[
{s:"A",type:"mcq",q:"What is the difference between a list and a tuple in Python?",o:["Lists are faster","Tuples are mutable; lists are immutable","Lists are mutable; tuples are immutable","No difference"],c:2},
{s:"A",type:"mcq",q:"What does the 'self' keyword represent in a Python class?",o:["The parent class","The module","The current instance","A static method"],c:2},
{s:"A",type:"mcq",q:"Which Python built-in function returns the maximum value?",o:["top()","max()","peak()","highest()"],c:1},
{s:"A",type:"mcq",q:"What does 'pip' stand for in Python?",o:["Python Install Package","Pip Installs Packages","Package Index Python","Python Index Provider"],c:1},
{s:"A",type:"mcq",q:"Which Git command stages files for commit?",o:["git push","git add","git save","git stage"],c:1},
{s:"A",type:"mcq",q:"What is a lambda function?",o:["A function in a library","An anonymous one-line function","A class method","A loop function"],c:1},
{s:"A",type:"mcq",q:"Which Python statement is used to skip the current loop iteration?",o:["break","pass","skip","continue"],c:3},
{s:"A",type:"mcq",q:"What is the difference between == and is in Python?",o:["No difference","== checks value; is checks identity","== checks identity; is checks value","Both check memory address"],c:1},
{s:"A",type:"mcq",q:"What is a Python virtual environment used for?",o:["Running code faster","Isolating project dependencies","Backing up files","Managing Git branches"],c:1},
{s:"A",type:"mcq",q:"What does the .gitignore file do?",o:["Lists files to commit","Specifies files Git should ignore","Tracks deleted files","Stores commit history"],c:1},
{s:"A",type:"mcq",q:"Which method removes and returns the last element of a list?",o:["remove()","delete()","pop()","discard()"],c:2},
{s:"A",type:"mcq",q:"How do you import a module named 'math' in Python?",o:["include math","import math","require math","use math"],c:1},
{s:"A",type:"mcq",q:"What is a Jupyter Notebook code cell?",o:["Markdown cell","Code cell","Text cell","Script cell"],c:1},
{s:"A",type:"mcq",q:"Which VS Code feature helps auto-complete code?",o:["GitLens","IntelliSense","Terminal","Debug Console"],c:1},
{s:"A",type:"mcq",q:"What does the 'break' statement do in a loop?",o:["Skips one iteration","Exits the loop entirely","Pauses the loop","Goes to next function"],c:1},
{s:"A",type:"mcq",q:"Which is the correct way to create an empty dictionary?",o:["dict = []","dict = ()","dict = {}","dict = set()"],c:2},
{s:"A",type:"mcq",q:"What type of error occurs when you divide by zero in Python?",o:["TypeError","ValueError","ZeroDivisionError","IndexError"],c:2},
{s:"A",type:"mcq",q:"What does 'CLI' stand for?",o:["Code Line Interface","Command Line Interface","Computer Logic Interface","Common Language Input"],c:1},
{s:"A",type:"mcq",q:"Which Python method converts a list to a string using a separator?",o:["str.join()","list.toString()","''.join()","str(list)"],c:2},
{s:"A",type:"mcq",q:"What is the purpose of a try-except block?",o:["Speed up code","Handle exceptions gracefully","Define functions","Import modules"],c:1},
{s:"A",type:"msq",q:"Which are valid string methods in Python?",o:["upper()","split()","append()","strip()"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are features of object-oriented programming in Python?",o:["Inheritance","Encapsulation","Compilation","Polymorphism"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which commands work in a CLI/terminal?",o:["ls / dir","cd","python script.py","git push"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are correct about Python functions?",o:["Can return multiple values","Can have default arguments","Must always return a value","Can be passed as arguments"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are Python file modes?",o:["'r' (read)","'w' (write)","'a' (append)","'x' (exclusive create)"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are differences between ML and traditional programming?",o:["ML learns from data","Traditional programming uses explicit rules","ML always needs a GPU","ML finds patterns automatically"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are Git branching concepts?",o:["main/master branch","Feature branch","Clone branch","Merge"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are valid Python exception types?",o:["ValueError","TypeError","KeyError","LogicError"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are characteristics of GenAI models?",o:["Generate new content","Trained on large datasets","Only classify images","Can generate text, images, audio"],c:[0,1,3]},
{s:"A",type:"nat",q:"What is the output of: sum(range(1, 6))?",c:"15"},
{s:"A",type:"nat",q:"How many elements does list(range(0,10,2)) contain?",c:"5"},
{s:"B",type:"mcq",q:"What does pd.read_csv() do?",o:["Writes data to CSV","Reads a CSV file into a DataFrame","Converts CSV to JSON","Merges CSV files"],c:1},
{s:"B",type:"mcq",q:"Which SQL statement retrieves all columns from a table?",o:["GET * FROM table","SELECT * FROM table","FETCH ALL FROM table","SHOW * FROM table"],c:1},
{s:"B",type:"mcq",q:"What is a pandas Series?",o:["A 2D DataFrame","A 1D labeled array","A SQL query result","A plot object"],c:1},
{s:"B",type:"mcq",q:"What does GROUP BY do in SQL?",o:["Sorts data","Groups rows with same values for aggregation","Joins two tables","Filters rows"],c:1},
{s:"B",type:"mcq",q:"Which pandas method sorts a DataFrame by a column?",o:["df.order()","df.sort_values()","df.arrange()","df.rank()"],c:1},
{s:"B",type:"mcq",q:"What is an outlier in a dataset?",o:["A missing value","A data point far from other values","A duplicate row","A categorical value"],c:1},
{s:"B",type:"mcq",q:"Which SQL keyword joins tables and keeps only matching rows?",o:["LEFT JOIN","OUTER JOIN","INNER JOIN","FULL JOIN"],c:2},
{s:"B",type:"mcq",q:"What does df.dropna() do?",o:["Fills missing values","Removes rows with NaN values","Drops duplicate rows","Deletes a column"],c:1},
{s:"B",type:"mcq",q:"Which is NOT a valid pandas aggregation function?",o:["mean()","sum()","count()","insert()"],c:3},
{s:"B",type:"mcq",q:"What does np.reshape() do?",o:["Sorts array","Changes array dimensions","Deletes elements","Filters array"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of df.value_counts()?",o:["Counts unique values per column","Counts total rows","Counts NaN values","Counts columns"],c:0},
{s:"B",type:"mcq",q:"Which SQL clause filters aggregated results?",o:["WHERE","HAVING","GROUP BY","FILTER"],c:1},
{s:"B",type:"mcq",q:"What is a histogram used to visualize?",o:["Relationship between two variables","Distribution of a single variable","Time series","Categorical comparison"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of df.reset_index()?",o:["Deletes the index","Resets index to default integer index","Sorts by index","Sets a new index"],c:1},
{s:"B",type:"mcq",q:"What does pd.concat() do?",o:["Merges DataFrames by key","Stacks DataFrames vertically or horizontally","Filters rows","Groups data"],c:1},
{s:"B",type:"mcq",q:"What is a box plot used for?",o:["Showing data distribution, median, quartiles","Line trends over time","Comparing two variables","Showing proportions"],c:0},
{s:"B",type:"mcq",q:"What does df.corr() compute?",o:["Covariance matrix","Correlation matrix between numeric columns","Value counts","Missing values"],c:1},
{s:"B",type:"mcq",q:"In SQL, what does LIMIT 10 do?",o:["Returns every 10th row","Returns first 10 rows","Limits table size","Rounds values to 10"],c:1},
{s:"B",type:"mcq",q:"What is the difference between df.loc and df.iloc?",o:["No difference","loc uses labels; iloc uses integer positions","loc uses integers; iloc uses labels","Only iloc exists in pandas"],c:1},
{s:"B",type:"mcq",q:"Which method adds a new column to a DataFrame?",o:["df.add_column()","df['new_col'] = values","df.insert_column()","df.append_column()"],c:1},
{s:"B",type:"msq",q:"Which are valid ways to handle outliers?",o:["Capping","Removal","Transformation (log)","Ignoring all data"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are types of data in a DataFrame?",o:["int64","float64","object (string)","image"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which SQL operations modify data?",o:["INSERT","UPDATE","DELETE","SELECT"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid EDA visualizations?",o:["Histogram","Box plot","Scatter plot","Confusion matrix"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are features of Plotly vs Matplotlib?",o:["Plotly creates interactive charts","Matplotlib creates static charts by default","Plotly requires more code","Both are Python libraries"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which pandas methods remove duplicate data?",o:["df.drop_duplicates()","df.duplicated()","df.unique()","df.remove_dup()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about SQL JOINs?",o:["INNER JOIN returns matching rows only","LEFT JOIN returns all left table rows","CROSS JOIN returns Cartesian product","JOIN requires foreign keys always"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which data types require encoding before ML?",o:["Categorical strings","Boolean","Numerical floats","Date strings"],c:[0,3]},
{s:"B",type:"msq",q:"Which are valid API data formats?",o:["JSON","XML","CSV","PNG"],c:[0,1,2]},
{s:"B",type:"nat",q:"A dataset has 100 rows. After df.dropna(), 15 rows are removed. How many rows remain?",c:"85"},
{s:"B",type:"nat",q:"What is np.sum([10, 20, 30, 40])?",c:"100"},
{s:"C",type:"mcq",q:"What is the formula for accuracy in classification?",o:["TP/(TP+FP)","(TP+TN)/(TP+TN+FP+FN)","TP/(TP+FN)","TN/(TN+FP)"],c:1},
{s:"C",type:"mcq",q:"Which regularization adds absolute value penalty on coefficients?",o:["Ridge (L2)","Lasso (L1)","ElasticNet","Dropout"],c:1},
{s:"C",type:"mcq",q:"What is the purpose of one-hot encoding?",o:["Normalize numerical features","Convert categorical variables to binary columns","Remove missing values","Scale features to [0,1]"],c:1},
{s:"C",type:"mcq",q:"In a Decision Tree, what is a leaf node?",o:["Root of the tree","A split point","A terminal node with prediction","A feature name"],c:2},
{s:"C",type:"mcq",q:"What is precision in classification?",o:["TP/(TP+FN)","(TP+TN)/Total","TP/(TP+FP)","TN/(TN+FP)"],c:2},
{s:"C",type:"mcq",q:"What does 'variance' refer to in the bias-variance tradeoff?",o:["Error from wrong assumptions","Model sensitivity to small training data changes","Number of features","Training data size"],c:1},
{s:"C",type:"mcq",q:"What is the default metric for LogisticRegression in sklearn?",o:["RMSE","R²","Accuracy","MAE"],c:2},
{s:"C",type:"mcq",q:"What is StandardScaler?",o:["Scales to [0,1]","Scales to zero mean, unit variance","Removes outliers","Encodes categories"],c:1},
{s:"C",type:"mcq",q:"Which algorithm finds the best hyperplane to separate classes?",o:["K-Means","Decision Tree","Support Vector Machine","Linear Regression"],c:2},
{s:"C",type:"mcq",q:"What is the purpose of a validation set?",o:["Final evaluation","Tune hyperparameters during development","Training the model","Feature selection only"],c:1},
{s:"C",type:"mcq",q:"What is data leakage in ML?",o:["Data deletion","Information from test set accidentally used in training","Network data breach","Missing values"],c:1},
{s:"C",type:"mcq",q:"What does 'recall' measure?",o:["TP/(TP+FP)","TN/(TN+FP)","TP/(TP+FN)","Accuracy of negative class"],c:2},
{s:"C",type:"mcq",q:"In K-Fold cross-validation with K=5, how many times is the model trained?",o:["1","3","5","10"],c:2},
{s:"C",type:"mcq",q:"Which Python library provides the train_test_split function?",o:["pandas","numpy","sklearn","matplotlib"],c:2},
{s:"C",type:"mcq",q:"What is bagging in ensemble learning?",o:["Training models sequentially","Training multiple models on random data subsets in parallel","Feature selection method","A type of regularization"],c:1},
{s:"C",type:"mcq",q:"What is the Gini impurity used for in Decision Trees?",o:["Measuring regression error","Measuring classification split quality","Calculating distance","Feature scaling"],c:1},
{s:"C",type:"mcq",q:"What does 'fit' mean in sklearn models?",o:["Validate the model","Train the model on data","Predict on test data","Scale features"],c:1},
{s:"C",type:"mcq",q:"Which is a disadvantage of Decision Trees?",o:["Easy to understand","Fast training","Prone to overfitting","Handles multiple output types"],c:2},
{s:"C",type:"mcq",q:"What is the ROC-AUC score of a perfect classifier?",o:["0","0.5","0.75","1.0"],c:3},
{s:"C",type:"mcq",q:"Which technique creates synthetic minority samples for class imbalance?",o:["PCA","SMOTE","StandardScaler","Cross-validation"],c:1},
{s:"C",type:"msq",q:"Which are ensemble methods?",o:["Random Forest","Gradient Boosting","K-Means","Bagging"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are valid metrics for binary classification?",o:["Accuracy","ROC-AUC","F1 Score","RMSE"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about Logistic Regression?",o:["It's used for classification","Output is a probability","It directly predicts class labels only","It uses sigmoid function"],c:[0,1,3]},
{s:"C",type:"msq",q:"What does cross-validation help with?",o:["Reducing overfitting risk","Better performance estimate","Replacing test set permanently","Using all data for training and testing"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are data splitting strategies?",o:["Train/test split","K-Fold CV","Leave-one-out CV","Data duplication"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid ways to select features?",o:["Correlation analysis","Feature importance from tree models","Removing all numerical features","PCA"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are hyperparameters of K-Means?",o:["Number of clusters K","Max iterations","Learning rate (in standard K-Means)","Init method (e.g., k-means++)"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are valid encoding techniques for categorical variables?",o:["One-hot encoding","Label encoding","Ordinal encoding","Target encoding"],c:[0,1,2,3]},
{s:"C",type:"msq",q:"Which are characteristics of a good ML baseline?",o:["Simple to implement","Acts as a benchmark","Always outperforms complex models","Helps detect data issues"],c:[0,1,3]},
{s:"C",type:"nat",q:"With 5-Fold cross-validation, what percentage of data is used for validation in each fold?",c:"20"},
{s:"C",type:"nat",q:"If precision=0.8 and recall=0.8, what is the F1 score (as a decimal)?",c:"0.8"},
{s:"D",type:"mcq",q:"What is function calling in LLM agents?",o:["Calling Python functions normally","Allowing LLMs to invoke external tools/functions","Compiling code","Training a model"],c:1},
{s:"D",type:"mcq",q:"What is a JSON schema used for in agents?",o:["Storing images","Defining structured data format for tool inputs/outputs","Training data format","Encryption"],c:1},
{s:"D",type:"mcq",q:"What does 'backoff' mean in agent retry logic?",o:["Going back to previous step","Waiting progressively longer between retries","Stopping immediately","Switching to another model"],c:1},
{s:"D",type:"mcq",q:"What is Pydantic's main role in FastAPI?",o:["Database ORM","Request/response data validation","Authentication","Caching"],c:1},
{s:"D",type:"mcq",q:"What are environment variables used for in APIs?",o:["Storing training data","Storing secrets/config outside code","Formatting responses","Routing requests"],c:1},
{s:"D",type:"mcq",q:"What is cosine similarity used for in vector search?",o:["Measuring Euclidean distance","Measuring angle/similarity between vectors","Counting tokens","Training embeddings"],c:1},
{s:"D",type:"mcq",q:"What is a CSV Analyst agent?",o:["An agent that formats CSV files","An agent that answers questions about CSV data using tools","A data cleaning tool","A SQL database"],c:1},
{s:"D",type:"mcq",q:"What does 'context recall' measure in RAG evaluation?",o:["Speed of retrieval","Whether retrieved context contains the answer","Grammar quality","Response length"],c:1},
{s:"D",type:"mcq",q:"What is LangGraph primarily used for?",o:["Data preprocessing","Orchestrating multi-step agent workflows as graphs","Training LLMs","Storing embeddings"],c:1},
{s:"D",type:"mcq",q:"What is an FAQ Helpdesk agent?",o:["A manual support system","An AI agent that answers questions from a knowledge base","A database","A web scraper"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of request IDs in API logging?",o:["Authentication","Tracking individual API requests for debugging","Rate limiting","Caching"],c:1},
{s:"D",type:"mcq",q:"What does 'structured output' mean in LLM responses?",o:["Well-formatted paragraphs","Response in a defined format like JSON","Short responses","Summarized responses"],c:1},
{s:"D",type:"mcq",q:"What is a node in LangGraph?",o:["A data record","A step/function in the agent workflow","A database table","An API endpoint"],c:1},
{s:"D",type:"mcq",q:"What does 'answer correctness' measure in RAG eval?",o:["Speed of response","Whether the answer matches the ground truth","Length of answer","Grammar quality"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of env/secrets management in production?",o:["Speed up inference","Keep sensitive keys out of code","Format API responses","Train models"],c:1},
{s:"D",type:"mcq",q:"What is a mini-build in the agents course context?",o:["A small model","A small end-to-end agent project","A code snippet","A dataset"],c:1},
{s:"D",type:"mcq",q:"What does FAISS stand for (used in vector stores)?",o:["Fast AI Inference System Software","Facebook AI Similarity Search","Feature-Aware Indexing System Software","Fast API Integration and Search System"],c:1},
{s:"D",type:"mcq",q:"What is the /chat endpoint pattern in FastAPI agents?",o:["Streaming data","An endpoint for conversational API interactions","Admin dashboard","Health check"],c:1},
{s:"D",type:"mcq",q:"What does 'token cost' refer to in LLM APIs?",o:["Authentication token","Price charged per token processed","Number of parameters","Context window size"],c:1},
{s:"D",type:"mcq",q:"What is the role of a retriever tool in an agent?",o:["Generate text responses","Fetch relevant documents from a vector store","Train the model","Format outputs"],c:1},
{s:"D",type:"msq",q:"Which are valid tool-calling patterns in LLM agents?",o:["Single tool call","Sequential tool calls","Parallel tool calls","Recursive unlimited calls"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about embeddings?",o:["They are dense vectors","Similar texts have similar embeddings","They are always integers","They enable semantic search"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid RAG retrieval methods?",o:["Dense retrieval (embedding-based)","Sparse retrieval (BM25)","Random retrieval","Hybrid retrieval"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are components of a FastAPI application?",o:["Routes/endpoints","Request/response models","Middleware","Database only"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about LangGraph?",o:["It uses a graph structure","Nodes represent steps","Edges define transitions","It only works with OpenAI"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are best practices for API security?",o:["Use environment variables for secrets","Validate inputs","Log all requests with IDs","Store passwords in code"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are valid embedding model providers?",o:["OpenAI","Sentence Transformers (HuggingFace)","Cohere","Excel formulas"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are evaluation metrics for RAG systems?",o:["Answer correctness","Context recall","Context precision","Training accuracy"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are features of Streamlit?",o:["Easy Python web app creation","Supports interactive widgets","Requires React knowledge","Auto-reloads on code change"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are retry strategies for agents?",o:["Exponential backoff","Hard stop after N retries","Infinite retries always","Jitter in retry timing"],c:[0,1,3]},
{s:"D",type:"nat",q:"A model has a context window of 4096 tokens. System prompt=512, history=1024. How many tokens remain?",c:"2560"},
{s:"D",type:"nat",q:"If each embedding has 384 dimensions and you store 1000 embeddings, how many total numbers are stored?",c:"384000"}
],
3:[
{s:"A",type:"mcq",q:"What does [x**2 for x in range(4)] return?",o:["[1,4,9,16]","[0,1,4,9]","[0,1,2,3]","[1,2,3,4]"],c:1},
{s:"A",type:"mcq",q:"What is the Big-O complexity of accessing an element in a Python dict?",o:["O(n)","O(log n)","O(1)","O(n²)"],c:2},
{s:"A",type:"mcq",q:"What does *args in a function definition do?",o:["Accepts keyword arguments","Accepts variable number of positional arguments","Accepts only one argument","Multiplies all arguments"],c:1},
{s:"A",type:"mcq",q:"What is a decorator in Python?",o:["A comment above a function","A function that wraps and modifies another function","A CSS class","A type annotation"],c:1},
{s:"A",type:"mcq",q:"What does json.loads() do?",o:["Writes JSON to file","Parses JSON string to Python dict","Converts dict to JSON","Downloads JSON from URL"],c:1},
{s:"A",type:"mcq",q:"What does the requests library in Python do?",o:["Handles data analysis","Makes HTTP requests","Manages databases","Plots data"],c:1},
{s:"A",type:"mcq",q:"What is the difference between deep copy and shallow copy?",o:["No difference","Shallow copies references; deep copy copies full object tree","Deep copy is faster","Shallow copy is always preferred"],c:1},
{s:"A",type:"mcq",q:"What does the yield keyword do?",o:["Returns and ends function","Returns a value and pauses function (generator)","Imports a module","Catches an exception"],c:1},
{s:"A",type:"mcq",q:"What does git merge do?",o:["Deletes a branch","Combines two branches into one","Clones a repository","Resets to previous commit"],c:1},
{s:"A",type:"mcq",q:"What is a Context Manager in Python (with statement)?",o:["Handles exceptions","Manages resource setup and teardown","Defines class context","Loops over context"],c:1},
{s:"A",type:"mcq",q:"What is the output of: bool([]) in Python?",o:["True","False","None","Error"],c:1},
{s:"A",type:"mcq",q:"What is the difference between append() and extend() for lists?",o:["No difference","append adds one item; extend adds multiple items","extend adds one item; append adds multiple","Both add elements one at a time"],c:1},
{s:"A",type:"mcq",q:"What does the map() function do?",o:["Creates a dictionary","Applies a function to each item in an iterable","Maps network connections","Merges two lists"],c:1},
{s:"A",type:"mcq",q:"What is a set in Python?",o:["Ordered collection with duplicates","Unordered collection of unique elements","Key-value store","Mutable sequence"],c:1},
{s:"A",type:"mcq",q:"What does git rebase do?",o:["Deletes commits","Moves commits onto a new base commit","Resets changes","Clones repository"],c:1},
{s:"A",type:"mcq",q:"What is duck typing in Python?",o:["A design pattern","Type checking based on methods/properties rather than explicit type","Type annotation system","A testing framework"],c:1},
{s:"A",type:"mcq",q:"What is __init__.py used for in a Python package?",o:["Runs automatically at startup","Marks a directory as a Python package","Stores configuration","Tests the package"],c:1},
{s:"A",type:"mcq",q:"What does sorted(lst, key=lambda x: x[1]) sort by?",o:["First element","Second element of each item","String length","Reversed order"],c:1},
{s:"A",type:"mcq",q:"What does the walrus operator (:=) do?",o:["Creates a tuple","Assigns and returns a value in an expression","Compares two values","Defines a lambda"],c:1},
{s:"A",type:"mcq",q:"What is the purpose of __str__ in a class?",o:["Converts to int","Returns string representation of the object","Stores string","Defines string operations"],c:1},
{s:"A",type:"msq",q:"Which are valid ways to iterate in Python?",o:["for loop","while loop","list comprehension","generator expression"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are true about Python generators?",o:["They use yield","They are memory efficient","They generate all values at once","They return an iterator"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are features of Python dictionaries?",o:["Key-value pairs","Keys must be hashable","Ordered in Python 3.7+","Allow duplicate keys"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which Python modules handle HTTP and APIs?",o:["requests","http.client","urllib","pandas"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are valid Python comprehension types?",o:["List comprehension","Dict comprehension","Set comprehension","Tuple comprehension"],c:[0,1,2]},
{s:"A",type:"msq",q:"What are characteristics of a good Python notebook?",o:["Cells run top-to-bottom","Markdown for explanations","Re-runs produce different results always","Clear variable names"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are valid error-handling strategies?",o:["try-except","try-finally","raise custom exceptions","Ignoring all errors"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are true about Python's requests library?",o:["Supports GET and POST","Returns response objects","Handles JSON automatically","Requires manual socket management"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are valid API ethics/ToS considerations?",o:["Respecting rate limits","Not scraping without permission","Caching to reduce calls","Always scraping all data"],c:[0,1,2]},
{s:"A",type:"nat",q:"What is the output of: len({'a':1,'b':2,'c':3})?",c:"3"},
{s:"A",type:"nat",q:"How many elements does range(2,10,3) generate?",c:"3"},
{s:"B",type:"mcq",q:"What is the difference between df.merge() and pd.concat()?",o:["No difference","merge joins on keys; concat stacks DataFrames","concat joins on keys; merge stacks","Both use SQL-like syntax"],c:1},
{s:"B",type:"mcq",q:"What does np.where(condition, x, y) do?",o:["Finds array indices","Returns x where condition is True, y elsewhere","Filters rows","Sorts array conditionally"],c:1},
{s:"B",type:"mcq",q:"What is the SQL HAVING clause used for?",o:["Filtering rows before grouping","Filtering grouped/aggregated results","Sorting results","Joining tables"],c:1},
{s:"B",type:"mcq",q:"Which method computes the median of a pandas column?",o:["df['col'].mean()","df['col'].median()","df['col'].mode()","df['col'].mid()"],c:1},
{s:"B",type:"mcq",q:"What is a left join in SQL?",o:["Returns only matching rows","Returns all left rows + matching right rows","Returns all right rows","Returns all rows from both tables"],c:1},
{s:"B",type:"mcq",q:"What does df.apply(func) do?",o:["Applies func to each cell only","Applies func to each row or column","Applies func to the whole DataFrame at once","Filters by func condition"],c:1},
{s:"B",type:"mcq",q:"What is multicollinearity in a dataset?",o:["Many missing values","High correlation between predictor features","Too many rows","Duplicate rows"],c:1},
{s:"B",type:"mcq",q:"What does the Seaborn heatmap() visualize?",o:["Time series data","Correlation or matrix data with color intensity","Geographic data","Distribution of one variable"],c:1},
{s:"B",type:"mcq",q:"What is broadcasting in NumPy?",o:["Sending data over network","Performing operations on arrays of different shapes","Copying arrays","Broadcasting to multiple displays"],c:1},
{s:"B",type:"mcq",q:"What does pd.to_datetime() do?",o:["Converts DataFrame to time series","Converts strings/numbers to datetime objects","Gets current datetime","Formats datetime for display"],c:1},
{s:"B",type:"mcq",q:"What is a rolling window in pandas?",o:["Sorting by time","Computing statistics over a sliding window","Removing old data","Reshaping DataFrame"],c:1},
{s:"B",type:"mcq",q:"What does df.pivot_table() do?",o:["Merge two DataFrames","Create a summary table with aggregation by row/column groups","Sort data","Filter rows"],c:1},
{s:"B",type:"mcq",q:"What does SQLite differ from PostgreSQL?",o:["SQLite requires a server","SQLite is serverless and file-based","SQLite doesn't support SQL","SQLite is slower always"],c:1},
{s:"B",type:"mcq",q:"What is IQR used for?",o:["Measuring mean deviation","Detecting outliers beyond Q1-1.5*IQR or Q3+1.5*IQR","Calculating variance","Computing correlation"],c:1},
{s:"B",type:"mcq",q:"What does df.melt() do?",o:["Removes duplicates","Converts wide format to long format","Aggregates data","Filters rows"],c:1},
{s:"B",type:"mcq",q:"What is a foreign key in SQL?",o:["Primary identifier of a table","A column referencing a primary key in another table","An encrypted key","A query parameter"],c:1},
{s:"B",type:"mcq",q:"What does np.linspace(0,1,5) return?",o:["[0,1,2,3,4]","[0,0.25,0.5,0.75,1.0]","[0,0.2,0.4,0.6,0.8]","5 random numbers"],c:1},
{s:"B",type:"mcq",q:"What is a subquery in SQL?",o:["A stored procedure","A query nested inside another query","A JOIN operation","A view"],c:1},
{s:"B",type:"mcq",q:"What is the DataFrame index?",o:["Column name","Row label/identifier","Data type","Number of rows"],c:1},
{s:"B",type:"mcq",q:"What does df.set_index() do?",o:["Resets to integer index","Sets a column as the DataFrame index","Sorts the index","Creates a new column"],c:1},
{s:"B",type:"msq",q:"Which are valid pandas time series operations?",o:["resample()","rolling()","shift()","groupby() on dates"],c:[0,1,2,3]},
{s:"B",type:"msq",q:"Which are correct about np.array vs Python list?",o:["np.array supports broadcasting","np.array is faster for numerical ops","Python list can hold mixed types","np.array uses less memory for numbers"],c:[0,1,2,3]},
{s:"B",type:"msq",q:"Which are valid data cleaning steps?",o:["Removing duplicates","Handling missing values","Standardizing formats","Increasing dataset size artificially"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which SQL features help with data analysis?",o:["GROUP BY + aggregates","Window functions","Subqueries","DELETE all rows"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid Seaborn plot types?",o:["sns.boxplot()","sns.heatmap()","sns.violinplot()","sns.treemap()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are feature engineering techniques?",o:["Extracting date parts (day,month,year)","Creating interaction features","Binning numerical features","Deleting all features"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about pandas merge() join types?",o:["how='inner' keeps matching rows only","how='left' keeps all left rows","how='outer' keeps all rows from both","how='right' keeps all right rows"],c:[0,1,2,3]},
{s:"B",type:"msq",q:"Which NumPy operations are vectorized?",o:["Addition of arrays","Element-wise multiplication","Dot product","Sorting"],c:[0,1,2,3]},
{s:"B",type:"msq",q:"Which are valid API data fetching techniques in Python?",o:["requests.get()","requests.post()","pd.read_api()","json.loads() for parsing"],c:[0,1,3]},
{s:"B",type:"nat",q:"A DataFrame has columns ['age','salary','dept']. How many numeric columns are there (age=int, salary=float)?",c:"2"},
{s:"B",type:"nat",q:"SELECT COUNT(*) FROM table WHERE age > 30; — 40 out of 100 rows have age>30. Result?",c:"40"},
{s:"C",type:"mcq",q:"What is the cost function minimized by Linear Regression?",o:["Cross-entropy","Mean Absolute Error","Mean Squared Error (MSE)","Hinge loss"],c:2},
{s:"C",type:"mcq",q:"What happens when max_depth is too high in a Decision Tree?",o:["Underfitting","Overfitting","Better generalization","Faster training"],c:1},
{s:"C",type:"mcq",q:"What is gradient descent?",o:["A type of decision tree","An optimization algorithm that minimizes loss","A clustering method","A data preprocessing step"],c:1},
{s:"C",type:"mcq",q:"What is the elbow method used for in K-Means?",o:["Finding optimal max depth","Finding optimal number of clusters K","Selecting regularization strength","Feature selection"],c:1},
{s:"C",type:"mcq",q:"What is the sklearn Pipeline used for?",o:["Creating visualizations","Chaining preprocessing and model steps","Storing models","Plotting learning curves"],c:1},
{s:"C",type:"mcq",q:"What is feature importance in Random Forest?",o:["Number of features used","Ranking of features by their contribution to predictions","Correlation between features","Feature data types"],c:1},
{s:"C",type:"mcq",q:"What does 'leakage guard' mean in ML?",o:["Memory management","Ensuring test data info doesn't leak into training","Data encryption","API security"],c:1},
{s:"C",type:"mcq",q:"What is the difference between Lasso and Ridge?",o:["Lasso uses L2; Ridge uses L1","Lasso uses L1 (can zero out features); Ridge uses L2","Both use L1","Both use the same penalty"],c:1},
{s:"C",type:"mcq",q:"What is GridSearchCV in sklearn?",o:["Cross-validation only","Exhaustive search over hyperparameter grid with CV","Feature selection tool","Data visualization"],c:1},
{s:"C",type:"mcq",q:"What is the sigmoid function output range?",o:["[-1, 1]","[0, 1]","(-∞, +∞)","[0, ∞)"],c:1},
{s:"C",type:"mcq",q:"What is entropy in the context of Decision Trees?",o:["Model complexity measure","Measure of impurity/disorder in a node","Loss function value","Feature correlation"],c:1},
{s:"C",type:"mcq",q:"What is information gain in a Decision Tree?",o:["Accuracy improvement","Reduction in entropy after a split","Feature correlation","Model complexity"],c:1},
{s:"C",type:"mcq",q:"What is the purpose of the ROC curve?",o:["Visualize feature importance","Show tradeoff between TPR and FPR at various thresholds","Show learning curve","Visualize decision boundaries"],c:1},
{s:"C",type:"mcq",q:"What is boosting in ensemble learning?",o:["Parallel training of models","Sequential training where each model corrects previous errors","Random sampling of features","Feature selection method"],c:1},
{s:"C",type:"mcq",q:"What is a metric table in ML practice?",o:["Database table","A table comparing model performance across metrics","A feature correlation table","A confusion matrix"],c:1},
{s:"C",type:"mcq",q:"What is SimpleImputer in sklearn?",o:["A scaling method","Fills missing values with mean/median/mode/constant","Removes outliers","Encodes categories"],c:1},
{s:"C",type:"mcq",q:"What is the difference between regression and classification trees?",o:["No difference","Regression trees predict continuous values; classification trees predict classes","Classification trees use MSE; regression uses Gini","Only classification trees can overfit"],c:1},
{s:"C",type:"mcq",q:"What does 'model complexity' generally relate to?",o:["Number of training samples","Number of parameters or depth of model","Preprocessing time","Dataset size"],c:1},
{s:"C",type:"mcq",q:"What is the difference between hard and soft voting in ensemble?",o:["Hard uses probabilities; soft uses class votes","Hard uses majority class vote; soft averages probabilities","No difference","Hard is more accurate always"],c:1},
{s:"C",type:"mcq",q:"What is the ROC-AUC score of a random classifier?",o:["0","0.5","0.75","1.0"],c:1},
{s:"C",type:"msq",q:"Which are boosting algorithms?",o:["AdaBoost","Gradient Boosting","XGBoost","K-Means"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are correct about the bias-variance tradeoff?",o:["High bias = underfitting","High variance = overfitting","Increasing model complexity reduces bias","Increasing model complexity always reduces variance"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid imputation strategies?",o:["Mean imputation","Median imputation","Mode imputation","KNN imputation"],c:[0,1,2,3]},
{s:"C",type:"msq",q:"Which are true about Random Forest feature importance?",o:["Based on how much each feature reduces impurity","Available after fitting","Same as correlation","Can identify top features for selection"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are valid model selection criteria?",o:["CV performance","Model interpretability","Inference speed","Number of features in dataset"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about K-Means clustering?",o:["Requires specifying K","Sensitive to initialization","Works best with spherical clusters","Handles non-convex shapes well"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are sklearn preprocessing classes?",o:["StandardScaler","MinMaxScaler","OneHotEncoder","LogisticRegression"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid quick error analysis steps?",o:["Looking at misclassified examples","Analyzing error patterns by segment","Retraining on test data","Visualizing confusion matrix"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which hyperparameters control overfitting in Decision Trees?",o:["max_depth","min_samples_split","min_samples_leaf","n_features_in_"],c:[0,1,2]},
{s:"C",type:"nat",q:"In K-Fold CV with K=10 and 1000 samples, how many samples are in each validation fold?",c:"100"},
{s:"C",type:"nat",q:"If a Random Forest has 100 trees and each predicts class A, what is the final vote count for class A?",c:"100"},
{s:"D",type:"mcq",q:"What is the difference between zero-shot and few-shot prompting?",o:["No difference","Zero-shot has no examples; few-shot includes a few examples in prompt","Zero-shot is faster always","Few-shot requires fine-tuning"],c:1},
{s:"D",type:"mcq",q:"What is chain-of-thought prompting?",o:["Linking multiple models","Asking LLM to reason step-by-step before answering","Chaining API calls","A type of RAG"],c:1},
{s:"D",type:"mcq",q:"What does 'grounding' mean for LLMs?",o:["Training from scratch","Connecting LLM responses to verified external information","Grounding wires in hardware","Reducing token count"],c:1},
{s:"D",type:"mcq",q:"What is a vector database?",o:["A relational database","A database optimized for storing and searching embeddings","A NoSQL document store","A time-series database"],c:1},
{s:"D",type:"mcq",q:"What is the difference between fine-tuning and RAG?",o:["No difference","Fine-tuning modifies model weights; RAG retrieves external info at inference","RAG modifies weights; fine-tuning retrieves info","Both use the same process"],c:1},
{s:"D",type:"mcq",q:"What is a system message in OpenAI API?",o:["Error notification","Instructions for the assistant's behavior","User's first message","API key"],c:1},
{s:"D",type:"mcq",q:"What does 'hallucination' mean for LLMs?",o:["Slow response","Generating confident but factually incorrect information","Generating images","Memory overflow"],c:1},
{s:"D",type:"mcq",q:"What is prompt injection?",o:["Code injection","An attack where malicious input overrides original instructions","Prompt optimization","API authentication"],c:1},
{s:"D",type:"mcq",q:"What does 'latency' mean in LLM API context?",o:["Model accuracy","Time from request to response","Token cost","Context window size"],c:1},
{s:"D",type:"mcq",q:"What is a tool schema in LLM function calling?",o:["UI component","JSON definition of a tool's name, description, and parameters","Training data format","Error message"],c:1},
{s:"D",type:"mcq",q:"What is chunking overlap in RAG?",o:["Duplicate chunks","Shared tokens between adjacent chunks to preserve context","Merging chunks","Random splitting"],c:1},
{s:"D",type:"mcq",q:"What does BM25 stand for in retrieval?",o:["Binary Matrix 25","Best Match 25 — a sparse retrieval ranking function","Batch Mode 25","Base Model 25"],c:1},
{s:"D",type:"mcq",q:"What is the difference between generative and discriminative models?",o:["No difference","Generative models learn P(X,Y); discriminative learn P(Y|X)","Discriminative models generate new data","Both learn joint distributions"],c:1},
{s:"D",type:"mcq",q:"What does 'stateless' mean for an API?",o:["API is offline","Each request contains all info needed; no server-side session","API doesn't store data","API is read-only"],c:1},
{s:"D",type:"mcq",q:"What is embedding dimensionality?",o:["Number of tokens","Length of the embedding vector","Number of documents","Context window size"],c:1},
{s:"D",type:"mcq",q:"What is the retrieval threshold in RAG?",o:["Limit tokens","Filter retrieved chunks by minimum similarity score","Set temperature","Limit context window"],c:1},
{s:"D",type:"mcq",q:"What is model distillation?",o:["Cleaning training data","Training a smaller model to mimic a larger one","Adding more layers","Fine-tuning on specific tasks"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of a 10-prompt live eval?",o:["Training evaluation","Quick real-world quality check of an LLM application","Speed testing","Cost estimation"],c:1},
{s:"D",type:"mcq",q:"What is semantic chunking?",o:["Fixed-size splitting","Splitting text based on semantic meaning/topic boundaries","Random splitting","Splitting by paragraph count"],c:1},
{s:"D",type:"mcq",q:"What does 'agent memory' refer to?",o:["GPU memory","Mechanisms to persist and recall information across agent interactions","Token count","Model size"],c:1},
{s:"D",type:"msq",q:"Which are prompt engineering techniques?",o:["Few-shot prompting","Chain-of-thought","System message design","Random token insertion"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about vector databases?",o:["Support approximate nearest neighbor (ANN) search","Store embeddings efficiently","Replace relational databases entirely","Examples: Chroma, Pinecone, FAISS"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are true about LLM fine-tuning?",o:["Modifies model weights","Requires labeled training data","Works best for style/domain adaptation","Always better than RAG"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are valid LLM evaluation methods?",o:["Human evaluation","LLM-as-judge","Unit tests on structured outputs","A/B testing"],c:[0,1,2,3]},
{s:"D",type:"msq",q:"Which are architectural patterns for LLM agents?",o:["ReAct (Reason + Act)","Plan-and-execute","Single LLM call only","Multi-agent orchestration"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are RAG failure modes?",o:["Retrieved wrong chunks","LLM ignores context","Always perfect accuracy","Context window overflow"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid LangChain components?",o:["Chains","Agents","Vector stores","SQL query optimizer"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are considerations for deploying LLM apps?",o:["Cost per query","Latency requirements","Security of API keys","Unlimited free compute"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about Pydantic models?",o:["Auto-validate data types","Support default values","Require manual validation code","Can serialize to JSON"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid patterns for multi-tool agents?",o:["Sequential tool use","Conditional tool selection","Always using all tools","Tool result as next prompt"],c:[0,1,3]},
{s:"D",type:"nat",q:"LLM charges $0.002 per 1000 tokens. A request uses 500 tokens. Cost in dollars?",c:"0.001"},
{s:"D",type:"nat",q:"A RAG system uses chunks of 512 tokens with 50-token overlap. Effective new content per chunk?",c:"462"}
],
4:[
{s:"A",type:"mcq",q:"What is the output of: [i for i in range(10) if i%2==0]?",o:["[1,3,5,7,9]","[0,2,4,6,8]","[0,1,2,3,4]","[2,4,6,8,10]"],c:1},
{s:"A",type:"mcq",q:"What does the @staticmethod decorator do?",o:["Creates a class method","Creates a method that doesn't receive instance or class as first arg","Creates a property","Creates a generator"],c:1},
{s:"A",type:"mcq",q:"What does the walrus operator (:=) assign?",o:["Creates a tuple","Assigns and returns a value in an expression","Compares two values","Defines a lambda"],c:1},
{s:"A",type:"mcq",q:"What is a metaclass in Python?",o:["A parent class","A class whose instances are classes (class of a class)","An abstract class","An interface"],c:1},
{s:"A",type:"mcq",q:"What does itertools.chain() do?",o:["Links functions","Chains multiple iterables into one","Chains network requests","Creates a generator from a list"],c:1},
{s:"A",type:"mcq",q:"What is the GIL in CPython?",o:["Global Input Loop","Global Interpreter Lock — prevents true thread parallelism","General Index Library","Git Integration Layer"],c:1},
{s:"A",type:"mcq",q:"What does functools.partial() do?",o:["Partially evaluates a condition","Creates a new function with some arguments pre-filled","Splits a function","Caches a function result"],c:1},
{s:"A",type:"mcq",q:"What is the difference between multiprocessing and threading?",o:["No difference","Multiprocessing uses separate processes (bypasses GIL); threading shares memory","Threading uses separate processes; multiprocessing shares memory","Both bypass GIL"],c:1},
{s:"A",type:"mcq",q:"What does the __repr__ method return?",o:["Same as __str__","An unambiguous string representation for debugging","HTML representation","Binary representation"],c:1},
{s:"A",type:"mcq",q:"What is a Protocol in Python typing?",o:["Network protocol","A structural subtyping interface (duck typing for type hints)","A base class","A test framework"],c:1},
{s:"A",type:"mcq",q:"What does git cherry-pick do?",o:["Selects best branch","Applies a specific commit to current branch","Removes commits","Merges feature branches"],c:1},
{s:"A",type:"mcq",q:"What does asyncio.gather() do?",o:["Collects print outputs","Runs multiple coroutines concurrently and waits for all","Gathers system metrics","Collects function arguments"],c:1},
{s:"A",type:"mcq",q:"What is the complexity of sorting a Python list of n elements?",o:["O(n)","O(n log n)","O(n²)","O(log n)"],c:1},
{s:"A",type:"mcq",q:"What does functools.lru_cache do?",o:["Limits recursion","Caches function results for repeated inputs","Creates lazy sequences","Logs function calls"],c:1},
{s:"A",type:"mcq",q:"What is a Python dataclass?",o:["A pandas class","A decorator that auto-generates __init__, __repr__ etc. for data holder classes","A typing class","A database model"],c:1},
{s:"A",type:"mcq",q:"What is the purpose of abc.ABC in Python?",o:["Define abstract base classes that force subclass method implementation","Create async classes","Define data classes","Create metaclasses"],c:0},
{s:"A",type:"mcq",q:"What is the difference between os.path and pathlib?",o:["No difference","pathlib is object-oriented; os.path is string-based","os.path is newer","pathlib only works on Linux"],c:1},
{s:"A",type:"mcq",q:"What does __slots__ do in a Python class?",o:["Define class methods","Restrict attributes and reduce memory usage","Create getters/setters","Define abstract methods"],c:1},
{s:"A",type:"mcq",q:"What does asyncio.create_task() do vs await?",o:["Same thing","create_task schedules coroutine concurrently without blocking; await blocks until done","await schedules without blocking","No difference in execution"],c:1},
{s:"A",type:"mcq",q:"What is the Python data model?",o:["Pandas data structure","A set of special methods (__dunder__) enabling integration with Python language features","Database schema","A data science framework"],c:1},
{s:"A",type:"msq",q:"Which are true about Python's asyncio?",o:["Single-threaded concurrent execution","Uses event loop","await pauses coroutine","Only for network I/O"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are Python design patterns?",o:["Singleton","Factory","Observer","CRUD"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are true about Python's typing module?",o:["Supports List[int]","Supports Optional[str]","Enforces types at runtime (without extra tools)","Supports Union types"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are valid Python testing frameworks?",o:["pytest","unittest","doctest","selenium (for web testing)"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are characteristics of a Python generator?",o:["Lazy evaluation","Infinite sequences possible","Stores all values in memory","Uses yield keyword"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are security considerations for Python API clients?",o:["Never hardcode API keys","Validate SSL certificates","Retry infinitely on 401","Use environment variables"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are true about Python's contextlib?",o:["contextmanager decorator","suppress() for ignoring exceptions","nullcontext()","Replaces all try-except"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are valid ways to profile Python code?",o:["cProfile","time.perf_counter()","memory_profiler","print() statements only"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are features of Python dataclasses?",o:["Auto-generated __init__","Auto-generated __repr__","Type-safe field definitions","Auto-generated SQL queries"],c:[0,1,2]},
{s:"A",type:"nat",q:"What is the output of: len(list(filter(lambda x: x>3, [1,2,3,4,5,6])))?",c:"3"},
{s:"A",type:"nat",q:"How many items does list(zip([1,2,3],[4,5])) contain?",c:"2"},
{s:"B",type:"mcq",q:"What is the difference between df.transform() and df.agg() in groupby?",o:["No difference","transform returns same-shape DataFrame; agg returns reduced result","agg returns same-shape; transform reduces","Both return same result"],c:1},
{s:"B",type:"mcq",q:"What is a window function in SQL?",o:["Function applied to entire table","Function applied over a partition of rows relative to current row","Aggregation only","A JOIN operation"],c:1},
{s:"B",type:"mcq",q:"What is the difference between RANK() and DENSE_RANK() in SQL?",o:["No difference","RANK() has gaps after ties; DENSE_RANK() doesn't","DENSE_RANK() has gaps; RANK() doesn't","Both produce the same output always"],c:1},
{s:"B",type:"mcq",q:"What does df.explode() do in pandas?",o:["Raises an error","Converts list-like entries in a column into separate rows","Explodes nested JSON","Expands columns"],c:1},
{s:"B",type:"mcq",q:"What is a CTE (Common Table Expression) in SQL?",o:["A type of JOIN","A named temporary result set defined with WITH clause","A stored procedure","An index type"],c:1},
{s:"B",type:"mcq",q:"What does pd.Categorical() do?",o:["Creates a list","Converts a column to categorical type (memory efficient)","Creates a pivot table","Filters by category"],c:1},
{s:"B",type:"mcq",q:"What is the difference between OLAP and OLTP?",o:["No difference","OLAP is for analytics (read-heavy); OLTP is for transactions (write-heavy)","OLTP is for analytics; OLAP for transactions","Both use the same schema"],c:1},
{s:"B",type:"mcq",q:"What is a star schema in data warehousing?",o:["A graph database","A schema with a central fact table surrounded by dimension tables","A NoSQL pattern","A ML schema"],c:1},
{s:"B",type:"mcq",q:"What does pd.cut() do?",o:["Cuts (removes) rows","Bins continuous numerical data into discrete intervals","Cuts columns","Removes outliers"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of EXPLAIN in SQL?",o:["Documents the query","Shows the query execution plan","Explains table structure","Lists all indexes"],c:1},
{s:"B",type:"mcq",q:"What is a materialized view in SQL?",o:["A regular view","A view whose results are stored physically","A temporary table","A CTE"],c:1},
{s:"B",type:"mcq",q:"What is a data pipeline?",o:["A network pipe","A series of automated steps to ingest, transform, and load data","A database schema","A visualization tool"],c:1},
{s:"B",type:"mcq",q:"What does Streamlit's st.cache_data() do?",o:["Clears cache","Caches function results to avoid recomputation","Stores uploaded files","Caches API keys"],c:1},
{s:"B",type:"mcq",q:"What is the difference between varchar and char in SQL?",o:["No difference","varchar stores variable-length strings; char stores fixed-length","char is newer","varchar is slower always"],c:1},
{s:"B",type:"mcq",q:"What does pd.qcut() differ from pd.cut()?",o:["No difference","qcut creates equal-frequency bins; cut creates equal-width bins","cut creates equal-frequency; qcut creates equal-width","Both create equal-width bins"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of a data dictionary?",o:["Python dictionary for data","Documentation of dataset columns, types, and descriptions","SQL data type reference","A compression format"],c:1},
{s:"B",type:"mcq",q:"What is scipy.stats.zscore() computing?",o:["Z-test p-value","Number of standard deviations from the mean for each value","Z-transform","Zipf scores"],c:1},
{s:"B",type:"mcq",q:"What is Apache Arrow used for?",o:["A web framework","A columnar in-memory data format enabling fast data interchange","A plotting library","A SQL engine"],c:1},
{s:"B",type:"mcq",q:"What is data lineage?",o:["Database genealogy","Tracking the origin, transformation, and movement of data through a system","Data compression history","Feature engineering log"],c:1},
{s:"B",type:"mcq",q:"What does the CAP theorem state?",o:["A caching strategy","Distributed systems can only guarantee 2 of: Consistency, Availability, Partition tolerance","A compression algorithm","An ML theorem"],c:1},
{s:"B",type:"msq",q:"Which are valid SQL window functions?",o:["ROW_NUMBER()","RANK()","LAG()","JOIN()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about pandas MultiIndex?",o:["Allows hierarchical indexing","Created by groupby with multiple keys","Only works on rows","Can be used on both rows and columns"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which are valid data quality dimensions?",o:["Completeness","Accuracy","Consistency","Quantity"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which NumPy linear algebra functions are valid?",o:["np.linalg.inv()","np.linalg.eig()","np.linalg.solve()","np.linalg.sort()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid Streamlit widgets?",o:["st.slider()","st.selectbox()","st.file_uploader()","st.train_model()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about data normalization vs standardization?",o:["Normalization scales to [0,1]","Standardization creates zero mean, unit variance","Both are preprocessing steps","Normalization is always better"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid SQL optimization techniques?",o:["Using indexes","Avoiding SELECT *","Using CTEs for readability","Running queries without LIMIT always"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid approaches for EDA on text data?",o:["Word frequency analysis","Sentence length distribution","Sentiment distribution","Ignoring text columns"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are features of an API-based data ingestion pipeline?",o:["Rate limit handling","Authentication","Pagination","Ignoring errors"],c:[0,1,2]},
{s:"B",type:"nat",q:"A SQL table has 500 rows. After GROUP BY on a column with 10 unique values, how many rows does the output have (max)?",c:"10"},
{s:"B",type:"nat",q:"If mean=100 and std=15, what is the z-score of a value of 130?",c:"2"},
{s:"C",type:"mcq",q:"What is the difference between bagging and boosting?",o:["No difference","Bagging trains models in parallel; boosting trains sequentially","Boosting trains in parallel; bagging sequentially","Both train on full dataset equally"],c:1},
{s:"C",type:"mcq",q:"What is the learning rate in gradient descent?",o:["Speed of data loading","Step size for parameter updates","Number of training epochs","Model complexity"],c:1},
{s:"C",type:"mcq",q:"What happens with a too-large learning rate?",o:["Slower convergence","Overshooting minimum, divergence","Always converges","Better generalization"],c:1},
{s:"C",type:"mcq",q:"What is the kernel trick in SVMs?",o:["Overfitting prevention","Mapping data to higher-dimensional space implicitly for non-linear separation","Feature scaling","Reducing computation"],c:1},
{s:"C",type:"mcq",q:"What is DBSCAN?",o:["A regression algorithm","A density-based clustering algorithm that finds noise points","A boosting method","A feature selection method"],c:1},
{s:"C",type:"mcq",q:"What does the stacking ensemble method do?",o:["Stacks features vertically","Uses predictions of base models as features for a meta-model","Trains models on stacked data","Averages model predictions only"],c:1},
{s:"C",type:"mcq",q:"What is mutual information in feature selection?",o:["Correlation between features","Measure of how much knowing one feature reduces uncertainty about the target","Model complexity","Information in training data"],c:1},
{s:"C",type:"mcq",q:"What is the difference between L1 and L2 regularization for feature selection?",o:["No difference","L1 produces sparse solutions (zeroes out features); L2 shrinks all","L2 produces sparse solutions; L1 shrinks all","Both produce same result"],c:1},
{s:"C",type:"mcq",q:"What is a learning curve?",o:["Training loss function","Plot of model performance vs training set size","A curve showing gradient","Feature importance plot"],c:1},
{s:"C",type:"mcq",q:"What is the purpose of early stopping?",o:["Stop training when out of data","Stop training when validation performance stops improving","Speed up data loading","Limit feature count"],c:1},
{s:"C",type:"mcq",q:"What is calibration in ML?",o:["Feature scaling","Aligning predicted probabilities with actual frequencies","Model compression","Hyperparameter tuning"],c:1},
{s:"C",type:"mcq",q:"What is the no-free-lunch theorem?",o:["All algorithms perform equally well on all problems","No single algorithm outperforms all others across all possible problems","Free algorithms are worse","Simple models are always best"],c:1},
{s:"C",type:"mcq",q:"What is Out-of-Bag (OOB) error in Random Forest?",o:["Test set error","Error measured on samples not used to train each tree","Training error","Validation error"],c:1},
{s:"C",type:"mcq",q:"What is Permutation Feature Importance?",o:["Feature correlation","Measuring importance by tracking performance drop when feature is randomly shuffled","Feature count","Gradient of feature"],c:1},
{s:"C",type:"mcq",q:"What is Shapley value (SHAP) used for?",o:["Shape of distribution","Explaining individual predictions by assigning feature contributions","Clustering algorithm","Loss function"],c:1},
{s:"C",type:"mcq",q:"What is the difference between accuracy and balanced accuracy?",o:["No difference","Balanced accuracy accounts for class imbalance; regular accuracy doesn't","Regular accuracy is always better","Balanced accuracy ignores true negatives"],c:1},
{s:"C",type:"mcq",q:"What is the VC dimension used for?",o:["Measuring dataset size","Measuring the capacity/expressiveness of a hypothesis class","Computing variance","Feature selection"],c:1},
{s:"C",type:"mcq",q:"What is the difference between parametric and non-parametric models?",o:["No difference","Parametric have fixed number of parameters; non-parametric grow with data","Non-parametric have fixed params; parametric grow","Parametric are always better"],c:1},
{s:"C",type:"mcq",q:"What is the purpose of warm_start in sklearn?",o:["Speed up data loading","Reuse previous fit results when fitting additional estimators","Warm up the GPU","Reset model parameters"],c:1},
{s:"C",type:"mcq",q:"What is Platt scaling?",o:["Feature scaling method","Converting SVM decision scores to probabilities","Scaling the kernel","L2 regularization"],c:1},
{s:"C",type:"msq",q:"Which are hyperparameter tuning methods?",o:["GridSearchCV","RandomizedSearchCV","BayesianOptimization","Manual tuning"],c:[0,1,2,3]},
{s:"C",type:"msq",q:"Which are true about XGBoost?",o:["It's a gradient boosting algorithm","Handles missing values internally","Uses tree-based learners","Always outperforms Random Forest"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid model interpretability methods?",o:["SHAP values","LIME","Feature importance","Confusion matrix"],c:[0,1,2,3]},
{s:"C",type:"msq",q:"Which are true about the ROC-AUC metric?",o:["AUC=0.5 means random classifier","AUC=1.0 means perfect classifier","It's threshold-independent","It works for multi-class without modification"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid dimensionality reduction methods?",o:["PCA","t-SNE","UMAP","Linear Regression"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are clustering evaluation metrics?",o:["Silhouette score","Davies-Bouldin index","Inertia/WCSS","F1 Score"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about gradient boosting?",o:["Trains trees sequentially","Each tree corrects the previous residuals","Always slower than Random Forest","Prone to overfitting without regularization"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are valid sklearn Pipeline steps?",o:["StandardScaler","OneHotEncoder","LogisticRegression","SQL queries"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about PCA?",o:["Finds orthogonal components of max variance","Unsupervised technique","Reduces dimensionality","Increases model accuracy always"],c:[0,1,2]},
{s:"C",type:"nat",q:"A Random Forest has 200 trees. ~63.2% of samples used per tree (bootstrap). What % are NOT seen (OOB)?",c:"36.8"},
{s:"C",type:"nat",q:"Logistic Regression outputs sigmoid=0.75, threshold=0.5. What class is predicted? (0 or 1)",c:"1"},
{s:"D",type:"mcq",q:"What is the transformer architecture's key innovation?",o:["Recurrence","Self-attention mechanism","Convolutional layers","Pooling layers"],c:1},
{s:"D",type:"mcq",q:"What does RLHF stand for?",o:["Reinforced Language Hierarchy Framework","Reinforcement Learning from Human Feedback","Recursive Language Hallucination Fix","Relational Learning Helper Function"],c:1},
{s:"D",type:"mcq",q:"What is quantization in LLMs?",o:["Token counting","Reducing model precision (float32→int8) to reduce size and speed up inference","Model training","Data compression"],c:1},
{s:"D",type:"mcq",q:"What is LoRA (Low-Rank Adaptation)?",o:["A loss function","Parameter-efficient fine-tuning by adding low-rank matrices to frozen model","A retrieval method","An attention mechanism"],c:1},
{s:"D",type:"mcq",q:"What is the attention mechanism in transformers?",o:["A filtering layer","Computing weighted sum of values based on query-key similarity","A pooling operation","A normalization technique"],c:1},
{s:"D",type:"mcq",q:"What is a ReAct agent?",o:["A React.js agent","An agent that interleaves Reasoning and Acting steps","A reactive programming pattern","A retrieval agent"],c:1},
{s:"D",type:"mcq",q:"What is instruction tuning?",o:["Tuning model architecture","Fine-tuning LLM on instruction-following datasets to improve task completion","Tuning learning rate","Adjusting token limits"],c:1},
{s:"D",type:"mcq",q:"What is a graph state in LangGraph?",o:["A visualization","Shared data structure that persists across nodes in the agent workflow","A database schema","An API response"],c:1},
{s:"D",type:"mcq",q:"What does 'streaming' mean in LLM API responses?",o:["Video streaming","Receiving tokens incrementally as they are generated","Batch processing","Compression"],c:1},
{s:"D",type:"mcq",q:"What is a multi-agent system?",o:["Multiple users","Multiple AI agents collaborating to solve complex tasks","Multiple models merged","An agent with multiple tools"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of a health check endpoint in an API?",o:["Authentication","Verify the API is running and dependencies are healthy","Get model predictions","Reset the server"],c:1},
{s:"D",type:"mcq",q:"What does 'token streaming' enable in user experience?",o:["Faster training","Real-time display of text as it generates (progressive rendering)","Better accuracy","Reduced cost"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of a reranker in RAG?",o:["Generate answers","Re-score retrieved chunks for better relevance ordering","Chunk documents","Train embeddings"],c:1},
{s:"D",type:"mcq",q:"What does 'encoder-only' vs 'decoder-only' transformer mean?",o:["No difference","Encoder-only (BERT) for understanding; decoder-only (GPT) for generation","Decoder-only for understanding; encoder for generation","Both are identical architecturally"],c:1},
{s:"D",type:"mcq",q:"What is document chunking sensitivity?",o:["Chunk size in MB","How chunk size and overlap affect retrieval quality","Document encryption","Number of documents"],c:1},
{s:"D",type:"mcq",q:"What is the difference between a tool and a function in LLM agents?",o:["No difference","Tools are functions exposed to the LLM through a structured schema","Functions are always external","Tools don't use JSON"],c:1},
{s:"D",type:"mcq",q:"What is DPO (Direct Preference Optimization)?",o:["Data preprocessing operation","An RLHF alternative that optimizes preferences directly without a reward model","A deployment pattern","A distillation method"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of KV cache in transformer inference?",o:["Caching API responses","Storing computed Key-Value pairs from past tokens to avoid recomputation","Caching model weights","Token storage"],c:1},
{s:"D",type:"mcq",q:"What is MMLU benchmark?",o:["A model architecture","Massive Multitask Language Understanding – tests knowledge across 57 subjects","A training dataset","A retrieval method"],c:1},
{s:"D",type:"mcq",q:"What is a sparse mixture-of-experts (MoE) model?",o:["A small dense model","A model where only a subset of 'expert' sub-networks activate per token","A clustering algorithm","A retrieval system"],c:1},
{s:"D",type:"msq",q:"Which are types of LLM memory?",o:["In-context (conversation history)","External (vector store)","Episodic (summaries)","Unlimited perfect recall always"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about the transformer self-attention?",o:["Uses Query, Key, Value matrices","Has O(n²) attention complexity","Only attends to previous tokens","Allows parallel processing"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are parameter-efficient fine-tuning (PEFT) methods?",o:["LoRA","Prefix tuning","Prompt tuning","Full fine-tuning of all layers"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are challenges in multi-agent systems?",o:["Agent coordination","Avoiding infinite loops","Communication protocol design","Single point of failure in orchestration"],c:[0,1,2,3]},
{s:"D",type:"msq",q:"Which are valid RAG improvement strategies?",o:["Better chunking strategies","Hybrid retrieval (dense+sparse)","Reranking","Ignoring retrieved context"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about LLM inference optimization?",o:["Quantization reduces memory","Batching improves throughput","Caching KV cache improves latency","More parameters always faster"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are valid LLM safety techniques?",o:["RLHF","Constitutional AI","Output filtering","Removing guardrails"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are components of a production LLM API?",o:["Rate limiting","Authentication/API keys","Logging and monitoring","Unlimited free access"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about vector similarity metrics?",o:["Cosine similarity measures angle","Dot product measures projection","Euclidean measures geometric distance","All three always give identical rankings"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are LangGraph concepts?",o:["Nodes (processing steps)","Edges (transitions between nodes)","StateGraph (manages shared state)","Only works with ChatGPT"],c:[0,1,2]},
{s:"D",type:"nat",q:"If attention has n=100 tokens, self-attention complexity is O(n²). What is 100²?",c:"10000"},
{s:"D",type:"nat",q:"A LoRA adapter adds rank-r=8 matrices to a 1024×1024 weight matrix. Parameters added? (1024*8 + 8*1024)",c:"16384"}
],
5:[
{s:"A",type:"mcq",q:"What is the MRO (Method Resolution Order) in Python?",o:["Memory read order","Order Python searches for methods in class hierarchy (C3 linearization)","Module resolution order","Method runtime optimization"],c:1},
{s:"A",type:"mcq",q:"What does __getattribute__ vs __getattr__ differ in?",o:["No difference","__getattribute__ is called on every attribute access; __getattr__ only on AttributeError","__getattr__ is called every time; __getattribute__ only on error","Both called identically"],c:1},
{s:"A",type:"mcq",q:"What is a descriptor in Python?",o:["A docstring","An object that implements __get__, __set__, or __delete__ to control attribute access","A configuration file","A type annotation"],c:1},
{s:"A",type:"mcq",q:"What does sys.getrefcount() measure?",o:["Loop count","Number of references to an object (used by garbage collector)","System call count","Function recursion depth"],c:1},
{s:"A",type:"mcq",q:"What is the difference between __new__ and __init__?",o:["No difference","__new__ creates the instance; __init__ initializes it","__init__ creates; __new__ initializes","Both create new objects"],c:1},
{s:"A",type:"mcq",q:"What does the weakref module do?",o:["Creates strong references","Creates weak references that don't prevent garbage collection","Weakens function performance","Creates mutable references"],c:1},
{s:"A",type:"mcq",q:"What is a coroutine in Python?",o:["A parallel process","A function that can be paused and resumed using async/await","A correlated function","A callback function"],c:1},
{s:"A",type:"mcq",q:"What does the Ellipsis (...) object represent in Python?",o:["Empty value","A built-in constant used as placeholder or in type hints","Error placeholder","End of iteration"],c:1},
{s:"A",type:"mcq",q:"What is the purpose of sys.intern()?",o:["Internal module loading","Ensures string objects with same value share memory (string interning)","System interrupt","Module caching"],c:1},
{s:"A",type:"mcq",q:"What is the difference between copy.copy() and copy.deepcopy()?",o:["No difference","copy() shallow copies (references nested); deepcopy() recursively copies all","deepcopy() shallow; copy() deep","Both identical for immutables only"],c:1},
{s:"A",type:"mcq",q:"What is monkey patching in Python?",o:["Testing technique","Modifying or extending code at runtime (often a module or class)","A design pattern","Code refactoring"],c:1},
{s:"A",type:"mcq",q:"What does asyncio.create_task() do vs await coroutine?",o:["Same thing","create_task schedules coroutine concurrently without blocking; await blocks until done","await schedules without blocking","No difference"],c:1},
{s:"A",type:"mcq",q:"What does the @property decorator do?",o:["Makes a class attribute","Allows method to be accessed as attribute with getter/setter control","Creates a static method","Creates a class variable"],c:1},
{s:"A",type:"mcq",q:"What is a namedtuple in Python?",o:["A mutable tuple subclass","An immutable tuple subclass with named fields","A dictionary subclass","A list with named indices"],c:1},
{s:"A",type:"mcq",q:"What is tail call optimization and does Python support it?",o:["Python supports it natively","Optimization where tail recursion is compiled to iteration; Python does NOT support it","It's a memory optimization","It's a Python 3.10+ feature"],c:1},
{s:"A",type:"mcq",q:"What is the purpose of __enter__ and __exit__ methods?",o:["Class initialization","Implement the context manager protocol (with statement)","Define class iteration","Handle exceptions globally"],c:1},
{s:"A",type:"mcq",q:"What is the difference between str.format() and f-strings?",o:["No difference","f-strings are faster and more readable; str.format() is older","str.format() is faster","f-strings only work in Python 2"],c:1},
{s:"A",type:"mcq",q:"What does __class_getitem__ support?",o:["Get class name","Support generic types like list[int] in class definitions","Get class methods","Get class instances"],c:1},
{s:"A",type:"mcq",q:"What is __slots__ with inheritance?",o:["Parent slots override child","Child must define __slots__ too for full benefit; otherwise __dict__ created","No effect on memory","Only works in base classes"],c:1},
{s:"A",type:"mcq",q:"What does functools.partial() return?",o:["Partially evaluates a condition","Creates a new function with some arguments pre-filled","Splits a function","Caches a function result"],c:1},
{s:"A",type:"msq",q:"Which are true about Python's garbage collection?",o:["Uses reference counting","Cycle collector for circular references","Never frees memory","gc module can manually trigger collection"],c:[0,1,3]},
{s:"A",type:"msq",q:"Which are valid Python concurrency approaches?",o:["threading","multiprocessing","asyncio","subprocess"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are true about Python's import system?",o:["sys.path controls search locations","__init__.py marks packages","Circular imports can cause issues","Imports are always re-executed"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are valid uses of metaclasses?",o:["Registering classes automatically","Enforcing class interface contracts","Adding methods to all subclasses","Replacing instance creation"],c:[0,1,2,3]},
{s:"A",type:"msq",q:"Which are characteristics of Python's asyncio event loop?",o:["Single-threaded","Non-blocking I/O","Cooperative multitasking","Preemptive multitasking"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are true about Python type hints?",o:["Not enforced at runtime by default","mypy can do static type checking","TypeVar supports generic types","Mandatory since Python 3.5"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are design principles applicable to Python code?",o:["SOLID principles","DRY (Don't Repeat Yourself)","Zen of Python","Always use OOP for every task"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are valid ways to create singletons in Python?",o:["Module-level variables","Metaclass-based","Decorator-based","__init__ method only"],c:[0,1,2]},
{s:"A",type:"msq",q:"Which are advanced Python debugging tools?",o:["pdb (Python Debugger)","breakpoint() built-in","sys.settrace()","print() only"],c:[0,1,2]},
{s:"A",type:"nat",q:"What is sys.getrecursionlimit() default value in Python?",c:"1000"},
{s:"A",type:"nat",q:"What is the output of: len(set([1,1,2,2,3,3,4]))?",c:"4"},
{s:"B",type:"mcq",q:"What is a columnar storage format and its advantage?",o:["Row-based storage","Stores data column-by-column, enabling faster analytical queries and better compression","A NoSQL format","A graph database format"],c:1},
{s:"B",type:"mcq",q:"What is the difference between Parquet and CSV for large data?",o:["No difference","Parquet is columnar, compressed, schema-aware; CSV is row-based, uncompressed text","CSV is columnar; Parquet is row-based","CSV has better compression"],c:1},
{s:"B",type:"mcq",q:"What is query plan optimization in SQL?",o:["Manual query writing","Database engine automatically finding the most efficient way to execute a query","Adding indexes manually","Rewriting all queries"],c:1},
{s:"B",type:"mcq",q:"What is the difference between TRUNCATE and DELETE in SQL?",o:["No difference","TRUNCATE removes all rows faster without logging per-row; DELETE logs each row deletion","DELETE is faster","TRUNCATE logs all rows"],c:1},
{s:"B",type:"mcq",q:"What is a tidy dataset (Hadley Wickham)?",o:["A clean dataset with no nulls","Each variable is a column, each observation is a row, each value is a cell","A normalized dataset","A pivoted dataset"],c:1},
{s:"B",type:"mcq",q:"What is schema-on-read vs schema-on-write?",o:["No difference","Schema-on-write enforces structure during insert; schema-on-read interprets at query time","Schema-on-read is always better","Only schema-on-write exists"],c:1},
{s:"B",type:"mcq",q:"What is a data lake vs data warehouse?",o:["No difference","Data lake stores raw unstructured data; warehouse stores structured curated data","Data warehouse stores raw data","Data lake requires fixed schema"],c:1},
{s:"B",type:"mcq",q:"What does ACID stand for in databases?",o:["Atomic, Consistent, Isolated, Durable","Automated, Consistent, Integrated, Distributed","Atomic, Computed, Indexed, Dynamic","Automated, Compiled, Integrated, Deployed"],c:0},
{s:"B",type:"mcq",q:"What is a feature store in ML engineering?",o:["A database of ML models","A centralized repository for storing, sharing, and serving features","A version control for datasets","A model registry"],c:1},
{s:"B",type:"mcq",q:"What is Apache Arrow?",o:["A web framework","A columnar in-memory data format enabling fast data interchange between systems","A plotting library","A SQL engine"],c:1},
{s:"B",type:"mcq",q:"What is a slowly changing dimension (SCD)?",o:["A slow query","A dimension that changes over time, requiring strategies to track history","A deprecated table","A time-series dimension"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of a surrogate key in a data warehouse?",o:["Natural business key","System-generated unique identifier for dimension records, independent of business keys","Foreign key","Primary key from source"],c:1},
{s:"B",type:"mcq",q:"What is the difference between a fact table and a dimension table?",o:["No difference","Fact tables store metrics/measures; dimension tables store descriptive attributes","Dimension tables store metrics","Both store same data"],c:1},
{s:"B",type:"mcq",q:"What is the purpose of database indexing?",o:["Data encryption","Speed up data retrieval by creating a data structure for fast lookup","Sort the data physically","Compress the data"],c:1},
{s:"B",type:"mcq",q:"What is HDF5 format used for?",o:["Web data format","Hierarchical Data Format for storing large numerical datasets efficiently","A SQL format","A JSON alternative"],c:1},
{s:"B",type:"mcq",q:"What does df.memory_usage() return?",o:["Total DataFrame memory","Memory usage per column in bytes","Number of null values","Column data types"],c:1},
{s:"B",type:"mcq",q:"What is the difference between analytical and operational databases?",o:["No difference","Analytical DBs optimize for read-heavy aggregate queries; operational for fast transactional reads/writes","Operational DBs are for analytics","Both use same storage model"],c:1},
{s:"B",type:"mcq",q:"What does df.astype() do?",o:["Sorts by type","Converts column to specified data type","Filters by type","Groups by type"],c:1},
{s:"B",type:"mcq",q:"What is a percentile rank?",o:["Average rank","Percentage of values in dataset below a given value","Rank from 1 to 100","Maximum percentile"],c:1},
{s:"B",type:"mcq",q:"What is DVC (Data Version Control)?",o:["A database","A tool to version datasets and ML experiments similar to Git","A visualization tool","A deployment platform"],c:1},
{s:"B",type:"msq",q:"Which are valid big data file formats?",o:["Parquet","ORC","Avro","DOCX"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about distributed data processing?",o:["Spark processes data in parallel","Dask extends pandas to larger datasets","All distributed tools require Hadoop","Partitioning data enables parallelism"],c:[0,1,3]},
{s:"B",type:"msq",q:"Which are valid SQL index types?",o:["B-tree index","Hash index","Full-text index","JOIN index"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are data quality issues?",o:["Duplicates","Missing values","Incorrect data types","Too many columns"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid pandas IO functions?",o:["pd.read_csv()","pd.read_parquet()","pd.read_sql()","pd.read_model()"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid approaches for scaling data pipelines?",o:["Chunked processing","Parallel processing","Caching intermediate results","Loading all data into RAM always"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are important EDA considerations for ML?",o:["Target distribution analysis","Feature correlation analysis","Train/test distribution comparison","Random data removal"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are true about SQL transactions?",o:["COMMIT saves changes","ROLLBACK undoes changes","Transactions ensure ACID","SELECT automatically starts a transaction"],c:[0,1,2]},
{s:"B",type:"msq",q:"Which are valid data versioning tools?",o:["DVC (Data Version Control)","Git LFS","MLflow datasets","Excel autosave"],c:[0,1,2]},
{s:"B",type:"nat",q:"A Parquet file stores 1M rows × 100 columns. You read only 5 columns. What % of data is read vs CSV? (integer)",c:"5"},
{s:"B",type:"nat",q:"A fact table joins 4 dimension tables and each join doubles scan complexity naively. Multiplicative factor vs single table? (2^4)",c:"16"},
{s:"C",type:"mcq",q:"What is the mathematical formulation of the hinge loss (SVM)?",o:["max(0, 1-y·ŷ)","log(1+e^(-yŷ))","(y-ŷ)²","|y-ŷ|"],c:0},
{s:"C",type:"mcq",q:"What is the Johnson-Lindenstrauss lemma used for?",o:["Proof of convergence","Theoretical basis for random projections preserving pairwise distances","Feature selection","Clustering guarantees"],c:1},
{s:"C",type:"mcq",q:"What is Vapnik-Chervonenkis (VC) theory about?",o:["GPU training","Statistical learning theory relating model capacity to generalization bounds","Reinforcement learning","Neural network depth"],c:1},
{s:"C",type:"mcq",q:"What is the mathematical formula for information gain?",o:["H(parent) - weighted_avg_H(children)","H(children) - H(parent)","H(parent) × H(children)","1/H(parent)"],c:0},
{s:"C",type:"mcq",q:"What is the Expectation-Maximization (EM) algorithm used for?",o:["Supervised learning","Estimating latent variable models (e.g., GMM) by alternating E-step and M-step","Gradient descent variation","Feature selection"],c:1},
{s:"C",type:"mcq",q:"What is a Gaussian Mixture Model (GMM) clustering?",o:["K-Means with different initialization","Probabilistic clustering assuming data from mixture of Gaussians with soft assignments","Hard clustering method","Hierarchical clustering"],c:1},
{s:"C",type:"mcq",q:"What is hierarchical clustering?",o:["K-Means variant","Builds a tree of clusters (dendrogram) by merging (agglomerative) or splitting (divisive)","Graph-based clustering","Density-based clustering"],c:1},
{s:"C",type:"mcq",q:"What is the Matthews Correlation Coefficient (MCC)?",o:["A regression metric","A balanced binary classification metric that works well with class imbalance","A clustering metric","A feature correlation"],c:1},
{s:"C",type:"mcq",q:"What is isotonic regression?",o:["Regression on isotopes","Monotone regression that fits a step function; used for probability calibration","A regularization method","Weighted regression"],c:1},
{s:"C",type:"mcq",q:"What is the difference between transductive and inductive learning?",o:["No difference","Transductive makes predictions for specific test set; inductive learns generalizable model","Inductive is transductive","Both are identical"],c:1},
{s:"C",type:"mcq",q:"What is conformal prediction?",o:["A neural network technique","A framework providing distribution-free prediction intervals with guaranteed coverage","A boosting method","A clustering technique"],c:1},
{s:"C",type:"mcq",q:"What is threshold moving in binary classification?",o:["Change model architecture","Adjust decision boundary to optimize a specific metric (precision/recall tradeoff)","Scale features","Remove features"],c:1},
{s:"C",type:"mcq",q:"What is the difference between micro and macro averaging in multi-class metrics?",o:["No difference","Macro averages per-class metrics equally; micro aggregates all TP/FP/FN first","Micro averages per-class; macro aggregates","Both give same result always"],c:1},
{s:"C",type:"mcq",q:"What is a Pareto front in multi-objective optimization?",o:["A single optimal solution","The set of solutions where no objective can be improved without worsening another","Always a straight line","A feature selection boundary"],c:1},
{s:"C",type:"mcq",q:"What is maximum likelihood estimation (MLE)?",o:["Maximizing model size","Finding parameters that maximize the probability of observing the training data","Minimizing error","Gradient descent"],c:1},
{s:"C",type:"mcq",q:"What is a Bayesian prior in Bayesian ML?",o:["Training loss","Prior belief about parameter distribution before seeing data","Posterior probability","Model architecture"],c:1},
{s:"C",type:"mcq",q:"What is the difference between OLS and GLS in regression?",o:["No difference","OLS assumes homoscedastic errors; GLS handles heteroscedasticity and correlation","GLS is always better","OLS handles correlation"],c:1},
{s:"C",type:"mcq",q:"What is the dual form of SVM used for?",o:["Faster training always","Enables the kernel trick and works better when n_features > n_samples","Always required","Replaces primal form always"],c:1},
{s:"C",type:"mcq",q:"What is the Friedman test in ML evaluation?",o:["A feature importance test","Non-parametric test to compare multiple classifiers across multiple datasets","A neural network test","A regularization method"],c:1},
{s:"C",type:"mcq",q:"What is the generative vs discriminative classifier formal distinction?",o:["No formal difference","Generative models P(X,Y); discriminative models P(Y|X) directly","Discriminative models P(X,Y)","Both model P(Y|X)"],c:1},
{s:"C",type:"msq",q:"Which are true about the EM algorithm?",o:["Guarantees local (not global) optimum","Used for GMMs","E-step computes expected log-likelihood","M-step minimizes parameters"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid semi-supervised learning approaches?",o:["Self-training","Label propagation","Co-training","Fully supervised baseline"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about Bayesian optimization for hyperparameters?",o:["Uses a surrogate model","More efficient than random search with few evaluations","Always worse than grid search","Updates belief about objective function"],c:[0,1,3]},
{s:"C",type:"msq",q:"Which are valid neural network regularization techniques?",o:["Dropout","L2 weight decay","Batch normalization","Adding more layers always"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about PCA vs LDA?",o:["PCA is unsupervised","LDA is supervised and maximizes class separation","Both produce orthogonal components","LDA always outperforms PCA"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid anomaly detection methods?",o:["Isolation Forest","One-Class SVM","Autoencoders","Standard K-Means (directly)"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are calibration methods for ML models?",o:["Platt scaling","Isotonic regression","Temperature scaling","Feature scaling"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are true about multi-label classification?",o:["Each sample can have multiple labels","Different from multi-class (which assigns one label)","Binary Relevance is a valid approach","Accuracy is the only valid metric"],c:[0,1,2]},
{s:"C",type:"msq",q:"Which are valid time series cross-validation approaches?",o:["TimeSeriesSplit (walk-forward)","Blocked time series CV","Standard K-Fold (valid for time series)","Expanding window CV"],c:[0,1,3]},
{s:"C",type:"nat",q:"Dataset of 1000 samples with 5% positive class. How many positive samples?",c:"50"},
{s:"C",type:"nat",q:"MCC formula: TP=TN=50, FP=FN=0. What is MCC?",c:"1"},
{s:"D",type:"mcq",q:"What is Attention(Q,K,V) = ?",o:["softmax(QKᵀ/√d_k)V","QKV","softmax(Q+K)V","ReLU(QKᵀ)V"],c:0},
{s:"D",type:"mcq",q:"What is positional encoding in transformers?",o:["Token embedding","Sinusoidal signals added to embeddings to encode token position","Attention mask","Layer normalization"],c:1},
{s:"D",type:"mcq",q:"What is the difference between causal and bidirectional attention?",o:["No difference","Causal only attends to previous tokens (autoregressive); bidirectional attends to all tokens","Bidirectional is only for generation","Causal attends to future tokens"],c:1},
{s:"D",type:"mcq",q:"What is perplexity as an LLM metric?",o:["Model confusion level","Measure of how well a probability model predicts a sample; lower is better","A latency metric","A hallucination measure"],c:1},
{s:"D",type:"mcq",q:"What is Multi-Query Attention (MQA)?",o:["Multiple attention heads with separate KV","Variant where all heads share one K and V pair, reducing memory","Multiple parallel models","A RAG technique"],c:1},
{s:"D",type:"mcq",q:"What is speculative decoding in LLM inference?",o:["Speculating about training data","Using a smaller draft model to propose tokens, verified by larger model for faster inference","Guessing next token randomly","A fine-tuning method"],c:1},
{s:"D",type:"mcq",q:"What is Constitutional AI?",o:["Legal AI framework","Anthropic's method of training AI to follow a set of principles by self-critique","A model architecture","A RAG method"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of KV cache in transformer inference?",o:["Caching API responses","Storing computed Key-Value pairs from past tokens to avoid recomputation","Caching model weights","Token storage"],c:1},
{s:"D",type:"mcq",q:"What is DPO (Direct Preference Optimization)?",o:["Data preprocessing operation","An RLHF alternative that optimizes preferences directly without a reward model","A deployment pattern","A distillation method"],c:1},
{s:"D",type:"mcq",q:"What is the role of the reward model in RLHF?",o:["Training data generator","Predicts human preference scores for model outputs to guide RL training","Feature extractor","Token classifier"],c:1},
{s:"D",type:"mcq",q:"What is FlashAttention?",o:["A fast retrieval method","An IO-aware exact attention algorithm that reduces memory and speeds up attention computation","A model architecture","A tokenization method"],c:1},
{s:"D",type:"mcq",q:"What is a guardrail in LLM applications?",o:["A physical barrier","Safety layer that filters inputs/outputs to prevent harmful or off-topic responses","A model parameter","A deployment strategy"],c:1},
{s:"D",type:"mcq",q:"What is the purpose of a conversation buffer memory in LangChain?",o:["Storing model weights","Keeping all conversation history in context for multi-turn dialogue","Caching API keys","Storing documents"],c:1},
{s:"D",type:"mcq",q:"What is agent planning in multi-step tasks?",o:["Training strategy","The process of decomposing a complex goal into subtasks and determining execution order","A type of fine-tuning","A tokenization method"],c:1},
{s:"D",type:"mcq",q:"What is the difference between open-source and proprietary LLMs?",o:["No difference","Open-source models (Llama, Mistral) have public weights; proprietary (GPT-4, Claude) are API-only","Proprietary models are always better","Open-source models have no API"],c:1},
{s:"D",type:"mcq",q:"What is system-level prompt caching?",o:["Avoid rate limits","Cache prefilled KV state for repeated system prompts to reduce latency and cost","Store user messages","Train the model"],c:1},
{s:"D",type:"mcq",q:"What is the difference between RAG and long-context models?",o:["No difference","RAG retrieves relevant subset; long-context feeds entire context but is more expensive","Long-context is always cheaper","RAG requires no retrieval"],c:1},
{s:"D",type:"mcq",q:"What is a sparse mixture-of-experts (MoE) model?",o:["A small dense model","A model where only a subset of 'expert' sub-networks activate per token, enabling scale without proportional compute","A clustering algorithm","A retrieval system"],c:1},
{s:"D",type:"mcq",q:"What does token-level vs document-level embedding differ?",o:["No difference","Token embeddings represent individual tokens; document embeddings represent full text (often by pooling)","Document embeddings are always better","Token embeddings only work for single words"],c:1},
{s:"D",type:"mcq",q:"What are transformer scaling laws?",o:["Only data matters","Performance improves predictably with scale of data, compute, and parameters","Scaling hurts accuracy","Only model size matters"],c:1},
{s:"D",type:"msq",q:"Which are valid LLM quantization methods?",o:["INT8","INT4","GPTQ","Full float64 always"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about RAG with reranking?",o:["Reranker improves precision of retrieved chunks","Cross-encoders are common rerankers","Reranking always slows down response","Reranker reads query and document together"],c:[0,1,3]},
{s:"D",type:"msq",q:"Which are valid agent memory types in practice?",o:["Short-term (in-context)","Long-term (vector store)","Summary memory","Perfect unlimited memory"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about instruction-following LLMs?",o:["Trained with supervised fine-tuning on instruction datasets","Often further aligned with RLHF","Can follow complex multi-step instructions","Always follow instructions perfectly"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are valid agentic AI patterns?",o:["ReAct","Plan-and-execute","Tree of Thoughts","Static single-prompt"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are challenges in deploying LLM-based production systems?",o:["Cost management","Latency variability","Hallucination mitigation","Guaranteed perfect outputs"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about embedding model selection for RAG?",o:["Domain-specific models may outperform general ones","Embedding dimension affects storage and speed","Model choice affects retrieval quality","All embeddings produce identical results"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about LangGraph vs LangChain?",o:["LangGraph uses graph structure for complex agents","LangChain provides building blocks (chains, tools)","LangGraph supports cycles/loops in workflows","LangGraph replaces all LangChain features"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are valid strategies for reducing LLM hallucinations?",o:["RAG (grounding in retrieved facts)","Structured output validation","Low temperature for factual tasks","High temperature for factual tasks"],c:[0,1,2]},
{s:"D",type:"msq",q:"Which are true about transformer scaling laws?",o:["Performance improves predictably with scale","Data, compute, and parameters all matter","There are diminishing returns","Scaling always continues without limit"],c:[0,1,2]},
{s:"D",type:"nat",q:"In self-attention with d_k=64, what is the scaling factor √d_k? (integer)",c:"8"},
{s:"D",type:"nat",q:"A transformer with 12 attention heads and d_model=768. d_k = d_model/heads. What is d_k?",c:"64"}
]
};

// ════════════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════════════
const SECTION_INFO = {
  A:{label:"Python Foundations",total:31},
  B:{label:"Data, SQL & EDA",total:31},
  C:{label:"Regression & ML",total:31},
  D:{label:"GenAI & RAG",total:32}
};
const SECTION_ORDER = ["A","B","C","D"];

let currentSet = null;
let activeQs    = []; // shuffled copy of the current set
let currentIdx  = 0;  // global question index within set
let answers     = {}; // idx -> {value, submitted, isCorrect, shown}
let currentUser = null;
let attemptRecorded = false;

// ════════════════════════════════════════════════════════════
//  ACCOUNTS  (browser-only, localStorage)
// ════════════════════════════════════════════════════════════
const USERS_KEY='examUsers', SESSION_KEY='examSession';
let authMode='login';

function getUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)||'{}'); }catch(e){ return {}; } }
function setUsers(u){ localStorage.setItem(USERS_KEY,JSON.stringify(u)); }
function toHex(buf){ return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join(''); }
function randomSalt(){
  const a=new Uint8Array(16);
  if(window.crypto&&crypto.getRandomValues) crypto.getRandomValues(a);
  else for(let i=0;i<16;i++) a[i]=Math.floor(Math.random()*256);
  return toHex(a);
}
const hasSubtle=()=>!!(window.crypto&&crypto.subtle);

async function hashPassword(pw,salt,alg){
  if(alg==='pbkdf2'){
    const enc=new TextEncoder();
    const key=await crypto.subtle.importKey('raw',enc.encode(pw),'PBKDF2',false,['deriveBits']);
    const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:100000,hash:'SHA-256'},key,256);
    return toHex(bits);
  }
  // Fallback for browsers without WebCrypto (weaker)
  let h=5381; const str=salt+pw;
  for(let i=0;i<str.length;i++) h=((h<<5)+h+str.charCodeAt(i))|0;
  return (h>>>0).toString(16);
}

function isGmail(e){ return /^[a-z0-9._%+-]+@gmail\.com$/i.test(e); }

function switchAuth(mode){
  authMode=mode;
  document.getElementById('tabLogin').classList.toggle('active',mode==='login');
  document.getElementById('tabSignup').classList.toggle('active',mode==='signup');
  document.getElementById('confirmWrap').style.display=mode==='signup'?'flex':'none';
  document.getElementById('nameWrap').style.display=mode==='signup'?'flex':'none';
  document.getElementById('authSubmit').textContent=mode==='signup'?'Create account':'Log in';
  setAuthMsg('');
}
function setAuthMsg(text,type){
  const el=document.getElementById('authMsg');
  el.textContent=text||''; el.className='auth-msg'+(type?' '+type:'');
}

async function submitAuth(ev){
  if(ev) ev.preventDefault();
  const email=document.getElementById('authEmail').value.trim().toLowerCase();
  const pass=document.getElementById('authPass').value;
  const pass2=document.getElementById('authPass2').value;
  const btn=document.getElementById('authSubmit');
  if(!isGmail(email)) return setAuthMsg('Please enter a valid Gmail address (name@gmail.com).','err'),false;
  if(pass.length<6) return setAuthMsg('Password must be at least 6 characters.','err'),false;
  btn.disabled=true;
  try{
    const users=getUsers();
    if(authMode==='signup'){
      if(pass!==pass2) return setAuthMsg('Passwords do not match.','err'),false;
      if(users[email]) return setAuthMsg('This Gmail is already registered. Please log in.','err'),false;
      const alg=hasSubtle()?'pbkdf2':'weak';
      const salt=randomSalt();
      const name=(document.getElementById('authName').value.trim()||email.split('@')[0]).slice(0,40);
      const uid=nextUid(users);
      users[email]={uid,name,bio:'',socials:{},custom:[],photo:null,salt,alg,hash:await hashPassword(pass,salt,alg),created:new Date().toISOString(),attempts:[]};
      setUsers(users);
      loginUser(email);
      showToast('🎉 Welcome, '+name+'! Your UID is '+uid);
    } else {
      const u=users[email];
      if(!u) return setAuthMsg('Incorrect email or password.','err'),false;
      if(u.alg==='pbkdf2'&&!hasSubtle()) return setAuthMsg('This browser cannot verify passwords on this page. Open it via http://localhost or https.','err'),false;
      const hash=await hashPassword(pass,u.salt,u.alg);
      if(hash!==u.hash) return setAuthMsg('Incorrect email or password.','err'),false;
      loginUser(email);
    }
  } finally { btn.disabled=false; }
  return false;
}

function loginUser(email){
  currentUser=email;
  localStorage.setItem(SESSION_KEY,email);
  document.getElementById('authPass').value='';
  document.getElementById('authPass2').value='';
  setAuthMsg('');
  updateUserPill();
  goHome();
}
function logout(){
  currentUser=null;
  localStorage.removeItem(SESSION_KEY);
  ['home','quiz','results','history','profile','search','viewprofile'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('auth').style.display='flex';
  switchAuth('login');
  clearAuthFields(true);
}

// ── Attempts & history (per user) ──────────────────────────
function userAttempts(){ const u=getUsers()[currentUser]; return (u&&u.attempts)||[]; }
function recordAttempt(rec){
  const users=getUsers();
  if(!users[currentUser]) return;
  (users[currentUser].attempts=users[currentUser].attempts||[]).push(rec);
  setUsers(users);
}
function setStats(n){
  const at=userAttempts().filter(a=>a.set===n);
  return {count:at.length,best:at.length?Math.max(...at.map(a=>a.correct)):0};
}
function updateHomeCards(){
  for(let i=1;i<=5;i++){
    const el=document.querySelector(`.set-card[data-set="${i}"]`);
    const sc=document.getElementById(`hscore-${i}`);
    const st=setStats(i);
    if(st.count){ sc.textContent=`Attempts: ${st.count} · Best ${st.best}/125`; if(el) el.classList.add('attempted'); }
    else{ sc.textContent='Not attempted'; if(el) el.classList.remove('attempted'); }
  }
}
function showHistory(){
  ['home','quiz','results','auth','profile','search','viewprofile'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('history').style.display='block';
  const at=userAttempts();
  const sum=document.getElementById('historySummary');
  let html=`<div class="hs-card"><div class="hs-t">Total attempts</div><div class="hs-d" style="font-size:1.4rem;font-weight:800;color:#6366f1">${at.length}</div></div>`;
  for(let i=1;i<=5;i++){
    const a=at.filter(x=>x.set===i);
    const avg=a.length?Math.round(a.reduce((t,x)=>t+x.pct,0)/a.length):0;
    html+=`<div class="hs-card"><div class="hs-t">Set ${i}</div><div class="hs-d">Attempts: ${a.length}<br>Best: ${a.length?Math.max(...a.map(x=>x.correct)):0}/125<br>Avg: ${avg}%</div></div>`;
  }
  sum.innerHTML=html;
  const body=document.getElementById('historyBody');
  if(!at.length){
    body.innerHTML='<tr><td colspan="7" class="history-empty">No attempts yet. Finish a set and press Submit All.</td></tr>';
  } else {
    body.innerHTML=at.slice().reverse().map((x,i)=>{
      const d=new Date(x.date).toLocaleString();
      return `<tr><td>${at.length-i}</td><td>${d}</td><td>Set ${x.set}</td><td>${x.correct}</td><td>${x.wrong}</td><td>${x.skip}</td><td>${x.pct}%</td></tr>`;
    }).join('');
  }
  window.scrollTo(0,0);
}
function clearHistory(){
  if(!confirm('Delete all your attempt history? This cannot be undone.')) return;
  const users=getUsers();
  if(users[currentUser]){ users[currentUser].attempts=[]; setUsers(users); }
  showHistory();
}

// ════════════════════════════════════════════════════════════
//  UID, PROFILE, PASSWORD, SEARCH
// ════════════════════════════════════════════════════════════
const UID_START=10000001;
const SCREENS={auth:'flex',home:'flex',quiz:'block',results:'flex',history:'block',profile:'block',search:'block',viewprofile:'block'};
function showScreen(id){
  Object.keys(SCREENS).forEach(k=>document.getElementById(k).style.display=k===id?SCREENS[k]:'none');
  window.scrollTo(0,0);
}
const $id=id=>document.getElementById(id);
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function setMsg(id,text,type){ const el=$id(id); el.textContent=text||''; el.className='p-msg'+(type?' '+type:''); }
let toastTimer=null;
function showToast(msg){
  const t=$id('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),4500);
}

// next UID = highest existing UID + 1, starting at 10000001 (order-wise)
function nextUid(users){
  let max=UID_START-1;
  Object.values(users).forEach(u=>{ if(u&&u.uid&&u.uid>max) max=u.uid; });
  return max+1;
}
// give accounts created before profiles existed a UID (by sign-up date) and default fields
function migrateUsers(){
  const users=getUsers(); let changed=false;
  Object.entries(users).filter(([,u])=>!u.uid)
    .sort((a,b)=>String(a[1].created).localeCompare(String(b[1].created)))
    .forEach(([email,u])=>{ u.uid=nextUid(users); changed=true; });
  Object.entries(users).forEach(([email,u])=>{
    if(!u.name){ u.name=email.split('@')[0]; changed=true; }
    if(u.bio==null){ u.bio=''; changed=true; }
    if(!u.socials){ u.socials={}; changed=true; }
    if(!u.custom){ u.custom=[]; changed=true; }
    if(u.photo===undefined){ u.photo=null; changed=true; }
  });
  if(changed) setUsers(users);
}
function me(){ return getUsers()[currentUser]; }
function initials(name){ return String(name||'').trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase()||'?'; }
function safePhoto(p){ return typeof p==='string'&&/^data:image\/(jpeg|png|webp|gif);base64,/.test(p)?p:null; }
function avatarHtml(u,cls){
  const p=safePhoto(u.photo);
  return p?`<img class="${cls}" alt="" src="${esc(p)}"/>`:`<div class="${cls} av-ph">${esc(initials(u.name))}</div>`;
}
function maskEmail(e){ const [l,d]=String(e).split('@'); return (l?l[0]:'')+'***@'+(d||''); }
function updateUserPill(){
  const u=me(); if(!u) return;
  const el=$id('userEmail');
  el.innerHTML=avatarHtml(u,'av-pill');          // picture only, no text
  el.title=u.name+' · UID '+u.uid+' — open profile';
  el.setAttribute('aria-label','My profile: '+u.name);
}

// ── show / hide password ───────────────────────────────────
function togglePw(id,btn){
  const inp=$id(id); const show=inp.type==='password';
  inp.type=show?'text':'password';
  btn.textContent=show?'Hide':'Show';
  btn.setAttribute('aria-label',show?'Hide password':'Show password');
}

// ── social links ───────────────────────────────────────────
const SOCIALS=[
  {key:'instagram',label:'Instagram',icon:'📸',ph:'username',base:'https://instagram.com/'},
  {key:'whatsapp', label:'WhatsApp', icon:'💬',ph:'+91 98765 43210'},
  {key:'github',   label:'GitHub',   icon:'💻',ph:'username',base:'https://github.com/'},
  {key:'linkedin', label:'LinkedIn', icon:'💼',ph:'username or profile URL',base:'https://www.linkedin.com/in/'},
  {key:'facebook', label:'Facebook', icon:'👍',ph:'username',base:'https://facebook.com/'}
];
function safeUrl(v){
  try{
    const t=String(v).trim(); if(!t||/\s/.test(t)) return null;
    const u=new URL(/^https?:\/\//i.test(t)?t:'https://'+t);
    return (u.protocol==='http:'||u.protocol==='https:')&&u.hostname.includes('.')?u.href:null;
  }catch(e){ return null; }
}
function socialHref(key,val){
  const s=SOCIALS.find(x=>x.key===key); if(!s||!val) return null;
  if(key==='whatsapp') return /^\d{7,15}$/.test(val)?'https://wa.me/'+val:null;
  if(/^https?:\/\//i.test(val)) return safeUrl(val);
  return /^[A-Za-z0-9._-]{1,60}$/.test(val)?s.base+encodeURIComponent(val):null;
}
function socialLabel(key,val){ return key==='whatsapp'?'+'+val:(/^https?:\/\//i.test(val)?val.replace(/^https?:\/\/(www\.)?/i,''):'@'+val); }
function linksHtml(u){
  const items=[];
  SOCIALS.forEach(s=>{
    const v=(u.socials||{})[s.key]; const href=socialHref(s.key,v);
    if(href) items.push(`<a class="link-item" href="${esc(href)}" target="_blank" rel="noopener noreferrer"><span>${s.icon}</span><b>${s.label}</b><span>${esc(socialLabel(s.key,v))}</span></a>`);
  });
  (u.custom||[]).forEach(c=>{
    const href=safeUrl(c.url);
    if(href) items.push(`<a class="link-item" href="${esc(href)}" target="_blank" rel="noopener noreferrer"><span>🔗</span><b>${esc(c.label||'Link')}</b><span>${esc(href.replace(/^https?:\/\/(www\.)?/i,''))}</span></a>`);
  });
  return items.length?`<div class="link-list">${items.join('')}</div>`:'<div class="muted">No links added yet.</div>';
}
function statsOf(u){
  const at=u.attempts||[];
  return {count:at.length,best:at.length?Math.max(...at.map(a=>a.correct)):0};
}

// ── my profile ─────────────────────────────────────────────
let editCustom=[];
function showProfile(){ showScreen('profile'); renderProfile(); }
function renderProfile(){
  const u=me(); if(!u) return;
  const p=safePhoto(u.photo);
  $id('pPhoto').innerHTML=p?`<img alt="Profile photo" src="${esc(p)}"/>`:avatarHtml(u,'');
  $id('pName').textContent=u.name;
  $id('pUid').textContent='UID '+u.uid;
  $id('pMail').textContent=currentUser;
  $id('pRemove').disabled=!p;
  $id('pfName').value=u.name;
  $id('pfBio').value=u.bio||'';
  $id('socialFields').innerHTML=SOCIALS.map(s=>`<label class="p-field">${s.icon} ${s.label}<input type="text" id="sf_${s.key}" maxlength="80" placeholder="${esc(s.ph)}" value="${esc((u.socials||{})[s.key]||'')}"/></label>`).join('');
  editCustom=(u.custom||[]).map(c=>({label:c.label||'',url:c.url||''}));
  renderCustom();
  ['photoMsg','profileMsg','pwMsg'].forEach(id=>setMsg(id,''));
  ['pwCur','pwNew','pwNew2'].forEach(id=>$id(id).value='');
}
function renderCustom(){
  $id('customRows').innerHTML=editCustom.map((c,i)=>`<div class="custom-row">
      <input type="text" maxlength="20" placeholder="Label (e.g. Portfolio)" value="${esc(c.label)}" oninput="editCustom[${i}].label=this.value"/>
      <input type="text" maxlength="200" placeholder="https://example.com" value="${esc(c.url)}" oninput="editCustom[${i}].url=this.value"/>
      <button type="button" onclick="removeCustomLink(${i})" aria-label="Remove link">✕</button></div>`).join('');
  $id('addCustomBtn').style.display=editCustom.length>=5?'none':'inline-block';
}
function addCustomLink(){ if(editCustom.length<5){ editCustom.push({label:'',url:''}); renderCustom(); } }
function removeCustomLink(i){ editCustom.splice(i,1); renderCustom(); }

function saveProfile(){
  const users=getUsers(); const u=users[currentUser]; if(!u) return;
  const name=$id('pfName').value.trim();
  if(!name) return setMsg('profileMsg','Name cannot be empty.','err');
  const socials={};
  for(const s of SOCIALS){
    let v=$id('sf_'+s.key).value.trim();
    if(!v) continue;
    if(s.key==='whatsapp'){
      v=v.replace(/[\s()+-]/g,'');
      if(!/^\d{7,15}$/.test(v)) return setMsg('profileMsg','WhatsApp: enter a valid number with country code (7–15 digits).','err');
    } else if(/^https?:\/\//i.test(v)||v.includes('/')){
      const url=safeUrl(v); if(!url) return setMsg('profileMsg',s.label+': invalid link.','err');
      v=url;
    } else {
      v=v.replace(/^@/,'');
      if(!/^[A-Za-z0-9._-]{1,60}$/.test(v)) return setMsg('profileMsg',s.label+': use letters, numbers, dot, dash or underscore only.','err');
    }
    socials[s.key]=v;
  }
  const custom=[];
  for(const c of editCustom){
    const label=c.label.trim(), url=c.url.trim();
    if(!label&&!url) continue;
    const ok=safeUrl(url);
    if(!label||!ok) return setMsg('profileMsg','Other links need both a label and a valid URL.','err');
    custom.push({label:label.slice(0,20),url:ok});
  }
  u.name=name.slice(0,40); u.bio=$id('pfBio').value.trim().slice(0,160); u.socials=socials; u.custom=custom;
  try{ setUsers(users); }catch(e){ return setMsg('profileMsg','Could not save (browser storage full).','err'); }
  updateUserPill(); renderProfile();
  setMsg('profileMsg','Profile saved ✓','ok');
}

// ── profile photo: set / remove (keeps original proportions) ──
function setPhoto(dataUrl){
  const users=getUsers(); if(!users[currentUser]) return;
  users[currentUser].photo=dataUrl;
  try{ setUsers(users); }catch(e){ return setMsg('photoMsg','Could not save photo (browser storage full).','err'); }
  updateUserPill(); renderProfile();
  setMsg('photoMsg',dataUrl?'Photo updated ✓':'Photo removed ✓','ok');
}
function removePhoto(){ setPhoto(null); }
function onPhotoPicked(inp){
  const f=inp.files&&inp.files[0]; inp.value='';
  if(!f) return;
  if(!/^image\/(jpeg|png|webp|gif)$/.test(f.type)) return setMsg('photoMsg','Please choose a JPG, PNG, WebP or GIF image.','err');
  if(f.size>8*1024*1024) return setMsg('photoMsg','Image is too large (max 8 MB).','err');
  const rd=new FileReader();
  rd.onerror=()=>setMsg('photoMsg','Could not read that file.','err');
  rd.onload=()=>{
    const img=new Image();
    img.onerror=()=>setMsg('photoMsg','That image could not be opened.','err');
    img.onload=()=>openCrop(img,rd.result);
    img.src=rd.result;
  };
  rd.readAsDataURL(f);
}

// ── crop (round) before setting the photo ──────────────────
const CROP_VIEW=280, CROP_OUT=400;
const crop={img:null,w:0,h:0,min:1,zoom:1,x:0,y:0};
function cropScale(){ return crop.min*crop.zoom; }
function cropClamp(){
  const sc=cropScale();
  crop.x=Math.min(0,Math.max(CROP_VIEW-crop.w*sc,crop.x));
  crop.y=Math.min(0,Math.max(CROP_VIEW-crop.h*sc,crop.y));
}
function cropRender(){
  const el=$id('cropImg'), sc=cropScale();
  el.style.width=(crop.w*sc)+'px'; el.style.height=(crop.h*sc)+'px';
  el.style.transform='translate('+crop.x+'px,'+crop.y+'px)';
}
function openCrop(img,src){
  crop.img=img; crop.w=img.naturalWidth||img.width; crop.h=img.naturalHeight||img.height;
  crop.min=CROP_VIEW/Math.min(crop.w,crop.h);          // image always covers the circle
  crop.zoom=1; $id('cropZoom').value=1;
  crop.x=(CROP_VIEW-crop.w*crop.min)/2; crop.y=(CROP_VIEW-crop.h*crop.min)/2;
  $id('cropImg').src=src||img.src;
  cropClamp(); cropRender();
  $id('cropModal').style.display='flex';
}
function cropSetZoom(z){
  z=Math.min(4,Math.max(1,+z||1));
  const old=cropScale();
  // zoom around the centre of the circle
  const cx=(CROP_VIEW/2-crop.x)/old, cy=(CROP_VIEW/2-crop.y)/old;
  crop.zoom=z; const sc=cropScale();
  crop.x=CROP_VIEW/2-cx*sc; crop.y=CROP_VIEW/2-cy*sc;
  $id('cropZoom').value=z;
  cropClamp(); cropRender();
}
function cropMove(dx,dy){ crop.x+=dx; crop.y+=dy; cropClamp(); cropRender(); }
function cropRect(){ const sc=cropScale(); return {sx:-crop.x/sc,sy:-crop.y/sc,sw:CROP_VIEW/sc}; }
function cancelCrop(){ $id('cropModal').style.display='none'; crop.img=null; }
function applyCrop(){
  if(!crop.img) return;
  const r=cropRect();
  const cv=document.createElement('canvas'); cv.width=CROP_OUT; cv.height=CROP_OUT;
  const cx=cv.getContext('2d'); cx.fillStyle='#fff'; cx.fillRect(0,0,CROP_OUT,CROP_OUT);
  cx.drawImage(crop.img,r.sx,r.sy,r.sw,r.sw,0,0,CROP_OUT,CROP_OUT);
  const url=cv.toDataURL('image/jpeg',0.88);
  cancelCrop();
  setPhoto(url);
}
(function wireCrop(){
  const stage=$id('cropStage'), zoom=$id('cropZoom');
  if(!stage||!stage.addEventListener) return;
  let drag=null;
  stage.addEventListener('pointerdown',e=>{
    drag={x:e.clientX,y:e.clientY}; stage.classList.add('dragging');
    if(stage.setPointerCapture) try{ stage.setPointerCapture(e.pointerId); }catch(_){}
  });
  stage.addEventListener('pointermove',e=>{
    if(!drag) return;
    cropMove(e.clientX-drag.x,e.clientY-drag.y); drag={x:e.clientX,y:e.clientY};
  });
  const end=()=>{ drag=null; stage.classList.remove('dragging'); };
  stage.addEventListener('pointerup',end); stage.addEventListener('pointercancel',end);
  stage.addEventListener('wheel',e=>{ e.preventDefault(); cropSetZoom(crop.zoom+(e.deltaY<0?0.12:-0.12)); },{passive:false});
  zoom.addEventListener('input',()=>cropSetZoom(zoom.value));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&$id('cropModal').style.display==='flex') cancelCrop(); });
})();

// ── change password ────────────────────────────────────────
async function changePassword(){
  const cur=$id('pwCur').value, np=$id('pwNew').value, np2=$id('pwNew2').value;
  const btn=$id('pwBtn');
  const users=getUsers(); const u=users[currentUser]; if(!u) return;
  if(!cur||!np||!np2) return setMsg('pwMsg','Fill in all three fields.','err');
  if(np.length<6) return setMsg('pwMsg','New password must be at least 6 characters.','err');
  if(np!==np2) return setMsg('pwMsg','New passwords do not match.','err');
  if(np===cur) return setMsg('pwMsg','New password must be different from the current one.','err');
  if(u.alg==='pbkdf2'&&!hasSubtle()) return setMsg('pwMsg','This browser cannot verify passwords on this page. Open it via http://localhost or https.','err');
  btn.disabled=true;
  try{
    if(await hashPassword(cur,u.salt,u.alg)!==u.hash) return setMsg('pwMsg','Current password is incorrect.','err');
    const alg=hasSubtle()?'pbkdf2':'weak', salt=randomSalt();
    u.alg=alg; u.salt=salt; u.hash=await hashPassword(np,salt,alg);
    setUsers(users);
    ['pwCur','pwNew','pwNew2'].forEach(id=>$id(id).value='');
    setMsg('pwMsg','Password changed ✓','ok');
  } finally { btn.disabled=false; }
}

// ── user search (Gmail, name or UID) ───────────────────────
let viewing=null;
function showSearch(keep){
  showScreen('search');
  const inp=$id('searchInput');
  if(!keep) inp.value='';
  runSearch();
  if(inp.focus) inp.focus();
}
function runSearch(){
  const q=$id('searchInput').value.trim().toLowerCase();
  const box=$id('searchResults');
  if(q.length<2){ box.innerHTML='<div class="sr-empty">Type at least 2 characters — a Gmail, a name or a UID.</div>'; return; }
  const users=getUsers();
  const hits=Object.entries(users).filter(([email,u])=>
      String(u.uid).startsWith(q)||String(u.name||'').toLowerCase().includes(q)||email.includes(q))
    .sort((a,b)=>{
      const ea=(String(a[1].uid)===q||a[0]===q)?0:1, eb=(String(b[1].uid)===q||b[0]===q)?0:1;
      return ea-eb||a[1].uid-b[1].uid;
    }).slice(0,25);
  if(!hits.length){ box.innerHTML='<div class="sr-empty">No profile found for “'+esc(q)+'”.</div>'; return; }
  box.innerHTML=hits.map(([email,u])=>`<div class="sr-item" data-email="${esc(email)}" onclick="viewProfile(this.dataset.email)">
      ${avatarHtml(u,'sr-av')}
      <div><div class="sr-name">${esc(u.name)}</div><div class="sr-sub">UID ${esc(u.uid)} · ${esc(maskEmail(email))}</div></div></div>`).join('');
}
function viewProfile(email){
  const u=getUsers()[email]; if(!u) return;
  viewing=email; showScreen('viewprofile');
  const st=statsOf(u); const p=safePhoto(u.photo);
  $id('vTop').innerHTML=`<div class="p-photo">${p?`<img alt="Profile photo" src="${esc(p)}"/>`:avatarHtml(u,'')}</div>
    <div class="p-meta"><div class="p-name">${esc(u.name)}</div><div class="p-uid">UID ${esc(u.uid)}</div>
    <div class="p-mail">${esc(maskEmail(email))}${email===currentUser?' · (you)':''}</div>
    ${u.bio?`<div class="p-bio">${esc(u.bio)}</div>`:''}
    <div class="p-stats"><div><b>${st.count}</b>Attempts</div><div><b>${st.best}</b>Best score</div></div></div>`;
  $id('vBody').innerHTML='<h3 class="p-h">Links</h3>'+linksHtml(u);
}

// ════════════════════════════════════════════════════════════
//  SHUFFLE  —  new random order on every attempt
// ════════════════════════════════════════════════════════════
function shuffleArray(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// Options like "Both ... " / "All of the above" depend on position, so keep them fixed.
function hasPositionalOption(q){
  return q.o.some(t=>/^(both\b|all of the above|none of the above|all three|all are)/i.test(String(t).trim()));
}

function shuffleOptions(q){
  const copy={...q};
  if(q.type==='nat'||hasPositionalOption(q)) return copy;
  const correct=Array.isArray(q.c)?q.c:[q.c];
  const order=shuffleArray(q.o.map((_,i)=>i));           // order[newPos] = oldIndex
  copy.o=order.map(old=>q.o[old]);
  const newCorrect=order.map((old,np)=>correct.includes(old)?np:-1).filter(np=>np>=0);
  copy.c=Array.isArray(q.c)?newCorrect.sort((a,b)=>a-b):newCorrect[0];
  return copy;
}

// Shuffle questions inside each section (A→D order kept) and shuffle options of each question
function buildShuffledSet(num){
  const bySection={};
  SETS[num].forEach(q=>{ (bySection[q.s]=bySection[q.s]||[]).push(q); });
  let result=[];
  SECTION_ORDER.forEach(sec=>{
    if(bySection[sec]) result=result.concat(shuffleArray(bySection[sec]).map(shuffleOptions));
  });
  return result;
}

// ════════════════════════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════════════════════════
function goHome(){
  document.getElementById('auth').style.display='none';
  ['history','profile','search','viewprofile'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('home').style.display='flex';
  document.getElementById('quiz').style.display='none';
  document.getElementById('results').style.display='none';
  updateHomeCards();
  window.scrollTo(0,0);
}
function startSet(num){
  currentSet=num; currentIdx=0; answers={}; attemptRecorded=false;
  activeQs=buildShuffledSet(num);
  document.getElementById('home').style.display='none';
  document.getElementById('results').style.display='none';
  document.getElementById('quiz').style.display='block';
  const titles=['','Easy','Easy–Medium','Medium','Medium–Hard','Hard'];
  document.getElementById('quizTopTitle').textContent=`Set ${num} · ${titles[num]}`;
  renderQuestion();
  window.scrollTo(0,0);
}
function retrySet(){ startSet(currentSet); }
function resetSection(){
  const qs=activeQs; const sec=currentSection();
  qs.forEach((_,i)=>{ if(activeQs[i].s===sec && answers[i]){ answers[i]=null; } });
  renderQuestion(); renderNav();
}

function currentSection(){
  return activeQs[currentIdx]?.s || 'A';
}

function goQuestion(idx){
  currentIdx=Math.max(0,Math.min(idx, activeQs.length-1));
  renderQuestion();
  // on phones the navigator sits below the question, so bring the new question into view
  if(window.innerWidth<=800){
    const card=document.getElementById('mainCard');
    if(card&&card.scrollIntoView) card.scrollIntoView({block:'start',behavior:REDUCED_MOTION?'auto':'smooth'});
  }
}
function prev(){ if(currentIdx>0) goQuestion(currentIdx-1); }
function next(){ if(currentIdx<activeQs.length-1) goQuestion(currentIdx+1); }

function jumpToSection(secIdx){
  const sec=SECTION_ORDER[secIdx];
  const qs=activeQs;
  const idx=qs.findIndex(q=>q.s===sec);
  if(idx>=0) goQuestion(idx);
}

// ════════════════════════════════════════════════════════════
//  RENDER QUESTION
// ════════════════════════════════════════════════════════════
function renderQuestion(){
  const qs=activeQs;
  const q=qs[currentIdx];
  const sec=SECTION_INFO[q.s];
  const secIdx=SECTION_ORDER.indexOf(q.s);
  // Count question number within section
  const qNumInSec = qs.slice(0,currentIdx).filter(x=>x.s===q.s).length+1;
  const typeLabel = {mcq:"MCQ",msq:"MSQ",nat:"NAT"}[q.type];
  const pillClass = {mcq:"pill-mcq",msq:"pill-msq",nat:"pill-nat"}[q.type];

  // Header
  document.getElementById('cardHeader').innerHTML=`
    <span class="type-pill ${pillClass}">${typeLabel}</span>
    <div class="q-meta">
      Question ${qNumInSec} of ${sec.total}
      <span class="sep">·</span>
      Stage ${secIdx+1} · ${sec.label}
    </div>`;

  // Question text
  document.getElementById('qText').textContent=q.q;

  // Hint
  const hints={mcq:"MCQ · pick one",msq:"MSQ · select all correct options",nat:"NAT · type a numerical answer"};
  document.getElementById('qHint').textContent=hints[q.type];

  // Feedback strip
  const fb=document.getElementById('feedbackStrip');
  fb.style.display='none'; fb.className='feedback-strip';

  // Options
  const optContainer=document.getElementById('optionsList');
  const ans=answers[currentIdx];
  const submitted=ans?.submitted||false;
  const shown=ans?.shown||false;

  if(q.type==='mcq'){
    optContainer.innerHTML=q.o.map((opt,oi)=>{
      let cls='opt-row'; let icon='';
      if(submitted||shown){
        if(oi===q.c){ cls+=' '+(ans?.value===q.c?'opt-correct':'opt-reveal'); icon=oi===ans?.value?'✓':'→'; }
        if(oi===ans?.value && ans?.value!==q.c){ cls+=' opt-wrong'; icon='✗'; }
      } else if(ans?.value===oi){ cls+=' selected'; }
      return `<div class="${cls}" id="opt-${oi}" onclick="selectMCQ(${oi})">
        <div class="opt-letter">${String.fromCharCode(65+oi)}</div>
        <div class="opt-text">${opt}</div>
        <span class="opt-icon">${icon}</span>
      </div>`;
    }).join('');
    if(submitted||shown){
      showFeedback(submitted,q,ans);
    }
  } else if(q.type==='msq'){
    const sel=ans?.value||[];
    optContainer.innerHTML=q.o.map((opt,oi)=>{
      let cls='opt-row'; let icon='';
      if(submitted||shown){
        const inC=q.c.includes(oi), inS=sel.includes(oi);
        if(inC && inS){ cls+=' opt-correct'; icon='✓'; }
        else if(!inC && inS){ cls+=' opt-wrong'; icon='✗'; }
        else if(inC && !inS){ cls+=' opt-reveal'; icon='→'; }
      } else if(sel.includes(oi)){ cls+=' selected'; }
      return `<div class="${cls}" id="opt-${oi}" onclick="selectMSQ(${oi})">
        <div class="opt-letter opt-sq" style="border-radius:5px">${String.fromCharCode(65+oi)}</div>
        <div class="opt-text">${opt}</div>
        <span class="opt-icon">${icon}</span>
      </div>`;
    }).join('');
    if(submitted||shown) showFeedback(submitted,q,ans);
  } else {
    // NAT
    const natVal=ans?.value||'';
    const disabled=(submitted||shown)?'disabled':'';
    const natCls=submitted?(ans?.isCorrect?'nat-ok':'nat-err'):'';
    optContainer.innerHTML=`<div class="nat-area">
      <input class="nat-input ${natCls}" type="text" id="natInput" inputmode="decimal" enterkeyhint="done" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type numerical answer…" value="${natVal}" ${disabled} oninput="saveNATVal()" onkeydown="if(event.key==='Enter'){event.preventDefault();saveNATVal();checkNAT();this.blur();}" onfocus="setTimeout(()=>this.scrollIntoView({block:'center',behavior:'smooth'}),300)"/>
      <button class="nat-check-btn" ${disabled} onclick="checkNAT()">Check ↵</button>
    </div>`;
    if(submitted||shown) showFeedback(submitted,q,ans);
  }

  // Action bar
  buildActionBar(q,ans,submitted,shown);

  // Nav & progress
  renderNav();
  updateProgress();

  // Stage tabs
  document.querySelectorAll('.stage-tab').forEach((t,i)=>t.classList.toggle('active',i===secIdx));

  // keep the active stage tab and current navigator button visible in their scroll areas
  const at=document.querySelector('.stage-tab.active');
  if(at&&at.parentElement) at.parentElement.scrollTo({left:at.offsetLeft-at.parentElement.clientWidth/2+at.offsetWidth/2,behavior:'auto'});
}

function showFeedback(submitted,q,ans){
  const fb=document.getElementById('feedbackStrip');
  if(ans?.shown && !submitted){
    fb.className='feedback-strip fb-wrong';
    const correctLabel = q.type==='msq'
      ? q.c.map(i=>String.fromCharCode(65+i)+'. '+q.o[i]).join(' | ')
      : q.type==='mcq'?`${String.fromCharCode(65+q.c)}. ${q.o[q.c]}`:q.c;
    fb.innerHTML=`💡 Answer shown → <strong>${correctLabel}</strong>`;
    fb.style.display='block';
  } else if(submitted){
    if(ans?.isCorrect){
      fb.className='feedback-strip fb-correct';
      fb.innerHTML='✅ Correct!';
    } else {
      fb.className='feedback-strip fb-wrong';
      const correctLabel = q.type==='msq'
        ? q.c.map(i=>String.fromCharCode(65+i)+'. '+q.o[i]).join(' | ')
        : q.type==='mcq'?`${String.fromCharCode(65+q.c)}. ${q.o[q.c]}`:q.c;
      fb.innerHTML=`❌ Wrong. Correct answer: <strong>${correctLabel}</strong>`;
    }
    fb.style.display='block';
  }
}

function buildActionBar(q,ans,submitted,shown){
  const bar=document.getElementById('actionBar');
  const canClear=(submitted||shown);
  let html='';
  // Clear
  html+=`<button class="btn btn-clear" ${canClear?'':'style="visibility:hidden"'} onclick="clearAnswer()">Clear</button>`;
  // Show answer
  html+=`<button class="btn btn-show" ${(submitted||shown)?'disabled':''} onclick="showAnswer()">Show answer</button>`;
  // MSQ submit
  if(q.type==='msq' && !submitted && !shown){
    html+=`<button class="btn btn-msq-submit" onclick="checkMSQ()">Submit →</button>`;
  }
  // spacer
  html+=`<span style="flex:1"></span>`;
  // Prev / Next
  html+=`<button class="btn btn-prev" onclick="prev()" aria-label="Previous question" ${currentIdx===0?'disabled':''}>← <span class="lbl">Previous</span></button>`;
  html+=`<button class="btn btn-primary btn-next" onclick="next()" aria-label="Next question" ${currentIdx===activeQs.length-1?'disabled':''}>Next →</button>`;
  bar.innerHTML=html;
}

// ════════════════════════════════════════════════════════════
//  INTERACTIONS
// ════════════════════════════════════════════════════════════
function selectMCQ(oi){
  const ans=answers[currentIdx];
  if(ans?.submitted||ans?.shown) return;
  if(!answers[currentIdx]) answers[currentIdx]={value:null,submitted:false,shown:false};
  answers[currentIdx].value=oi;
  // Auto-check
  checkMCQ();
}

function checkMCQ(){
  const q=activeQs[currentIdx];
  const ans=answers[currentIdx];
  if(!ans||ans.submitted||ans.shown) return;
  if(ans.value===null||ans.value===undefined) return;
  ans.submitted=true;
  ans.isCorrect=(ans.value===q.c);
  renderQuestion();
  updateProgress();
}

function selectMSQ(oi){
  const ans=answers[currentIdx];
  if(ans?.submitted||ans?.shown) return;
  if(!answers[currentIdx]) answers[currentIdx]={value:[],submitted:false,shown:false};
  if(!answers[currentIdx].value) answers[currentIdx].value=[];
  const arr=answers[currentIdx].value;
  const idx=arr.indexOf(oi);
  if(idx>=0) arr.splice(idx,1); else arr.push(oi);
  // Re-render options only
  const q=activeQs[currentIdx];
  q.o.forEach((_,i)=>{
    const el=document.getElementById(`opt-${i}`);
    if(el){ el.classList.toggle('selected', arr.includes(i)); }
  });
}

function checkMSQ(){
  const q=activeQs[currentIdx];
  const ans=answers[currentIdx];
  if(!ans||ans.submitted||ans.shown) return;
  const chosen=[...(ans.value||[])].sort();
  const correct=[...q.c].sort();
  ans.submitted=true;
  ans.isCorrect=JSON.stringify(chosen)===JSON.stringify(correct);
  renderQuestion();
  updateProgress();
}

function saveNATVal(){
  if(!answers[currentIdx]) answers[currentIdx]={value:'',submitted:false,shown:false};
  const el=document.getElementById('natInput');
  if(el) answers[currentIdx].value=el.value;
}

function checkNAT(){
  const q=activeQs[currentIdx];
  const ans=answers[currentIdx];
  if(!ans||ans.submitted||ans.shown) return;
  const userVal=(ans.value||'').trim();
  const correctVal=(q.c+'').trim();
  ans.submitted=true;
  ans.isCorrect=userVal===correctVal||parseFloat(userVal)===parseFloat(correctVal);
  renderQuestion();
  updateProgress();
}

function showAnswer(){
  const q=activeQs[currentIdx];
  if(!answers[currentIdx]) answers[currentIdx]={value:null,submitted:false,shown:false};
  const ans=answers[currentIdx];
  if(ans.submitted) return;
  ans.shown=true;
  ans.isCorrect=false;
  renderQuestion();
  updateProgress();
}

function clearAnswer(){
  answers[currentIdx]=null;
  renderQuestion();
  updateProgress();
}

// ════════════════════════════════════════════════════════════
//  NAVIGATOR & PROGRESS
// ════════════════════════════════════════════════════════════
function renderNav(){
  const qs=activeQs;
  const sec=qs[currentIdx].s;
  const secInfo=SECTION_INFO[sec];
  document.getElementById('navTitle').textContent=`Section ${sec} · ${secInfo.total} questions`;

  // Filter to same section
  const secQs=qs.map((q,i)=>({q,i})).filter(({q})=>q.s===sec);
  let html='';
  secQs.forEach(({q,i},li)=>{
    const ans=answers[i];
    let cls='nav-btn';
    if(i===currentIdx) cls+=' current';
    else if(ans?.submitted){ cls+=ans.isCorrect?' nav-correct':' nav-wrong'; }
    else if(ans?.shown){ cls+=' nav-shown'; }
    html+=`<button class="${cls}" onclick="goQuestion(${i})">${li+1}</button>`;
  });
  document.getElementById('navGrid').innerHTML=html;
}

function updateProgress(){
  const qs=activeQs;
  const answered=Object.values(answers).filter(a=>a&&(a.submitted||a.shown)).length;
  const correct=Object.values(answers).filter(a=>a&&a.isCorrect).length;
  const pct=(answered/qs.length*100).toFixed(0);
  document.getElementById('progFill').style.width=pct+'%';
  document.getElementById('progText').textContent=`${answered} / ${qs.length} answered`;
  document.getElementById('liveScore').textContent=`✅ ${correct}`;
}

// ════════════════════════════════════════════════════════════
//  SUBMIT ALL
// ════════════════════════════════════════════════════════════
function submitAll(){
  const answeredCount=Object.values(answers).filter(a=>a&&(a.submitted||a.shown)).length;
  if(!answeredCount){ alert('Answer at least one question before submitting.'); return; }
  // Auto-submit unanswered where possible
  activeQs.forEach((q,i)=>{
    const ans=answers[i];
    if(!ans||(!ans.submitted&&!ans.shown)) return;
  });
  const correct=Object.values(answers).filter(a=>a&&a.isCorrect).length;
  const submitted=Object.values(answers).filter(a=>a&&a.submitted).length;
  const shown=Object.values(answers).filter(a=>a&&a.shown&&!a.isCorrect).length;
  const wrong=submitted-correct+shown;
  const skip=activeQs.length-correct-wrong;
  const pct=Math.round(correct/activeQs.length*100);

  if(!attemptRecorded){
    attemptRecorded=true;
    recordAttempt({id:Date.now(),set:currentSet,date:new Date().toISOString(),correct,wrong,skip,pct,total:SETS[currentSet].length});
  }

  let emoji='',msg='';
  if(pct>=90){emoji='🏆';msg='Outstanding! You\'re exam ready!';}
  else if(pct>=75){emoji='🎉';msg='Great work! Keep practising!';}
  else if(pct>=60){emoji='💪';msg='Good effort! Review the wrong ones!';}
  else if(pct>=40){emoji='📖';msg='Keep studying — you\'re getting there!';}
  else{emoji='🔁';msg='More practice needed — review the notes!';}

  document.getElementById('resEmoji').textContent=emoji;
  document.getElementById('resBig').textContent=correct;
  document.getElementById('rCorrect').textContent=correct;
  document.getElementById('rWrong').textContent=wrong;
  document.getElementById('rSkip').textContent=skip;
  document.getElementById('rPct').textContent=pct+'%';
  document.getElementById('resMsg').textContent=msg;

  document.getElementById('quiz').style.display='none';
  document.getElementById('results').style.display='flex';
  window.scrollTo(0,0);
}

// ════════════════════════════════════════════════════════════
//  KEYBOARD SHORTCUTS
// ════════════════════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  if(document.getElementById('quiz').style.display==='none') return;
  const tag=document.activeElement.tagName;
  if(tag==='INPUT'||tag==='TEXTAREA') return;
  const q=activeQs?.[currentIdx];
  if(!q) return;
  const ans=answers[currentIdx];
  const submitted=ans?.submitted||ans?.shown;

  if(e.key==='ArrowRight'||e.key==='ArrowDown'){ e.preventDefault(); next(); }
  else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){ e.preventDefault(); prev(); }
  else if(e.key==='s'||e.key==='S'){ if(!submitted) showAnswer(); }
  else if(e.key==='Enter'){
    if(q.type==='msq'&&!submitted) checkMSQ();
    else if(q.type==='nat'&&!submitted) checkNAT();
  }
  else if(['a','b','c','d','e','A','B','C','D','E'].includes(e.key)){
    const oi='abcde'.indexOf(e.key.toLowerCase());
    if(q.type==='mcq'&&oi>=0&&oi<q.o.length&&!submitted) selectMCQ(oi);
    else if(q.type==='msq'&&oi>=0&&oi<q.o.length&&!submitted) selectMSQ(oi);
  }
});

// ════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════
function initApp(){
  migrateUsers();
  const email=localStorage.getItem(SESSION_KEY);
  if(email&&getUsers()[email]){ loginUser(email); }
  else { localStorage.removeItem(SESSION_KEY); document.getElementById('auth').style.display='flex'; }
}
initApp();

// ── keep the log-in form empty when the site opens (block browser autofill) ──
let authTyped=false;
['authEmail','authPass','authPass2','authName'].forEach(id=>{
  const el=document.getElementById(id);
  if(el&&el.addEventListener) el.addEventListener('input',()=>{ authTyped=true; });
});
function clearAuthFields(force){
  if(authTyped&&!force) return;           // never wipe what the user is typing
  ['authEmail','authPass','authPass2','authName'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  if(force) authTyped=false;
}
// browsers fill saved logins a moment after load, so clear again a few times
[0,150,500,1200].forEach(ms=>setTimeout(()=>clearAuthFields(false),ms));
window.addEventListener('pageshow',()=>{ authTyped=false; [0,150,500].forEach(ms=>setTimeout(()=>clearAuthFields(false),ms)); });

// ════════════════════════════════════════════════════════════
//  WATER EFFECTS  (movement only — no colour is ever added or changed)
//   • tap / click  : splash (watery ripple distortion) + 0.5s page shake
//   • hold for 5s  : the page blasts, then flows like water and settles
// ════════════════════════════════════════════════════════════
const WAVE_SCREENS=['auth','home','quiz','results','history','profile','search','viewprofile'];
const HOLD_MS=5000, PRESS_MS=300, TAP_MS=500, BLAST_MS=600, FLOW_MS=4200;
const REDUCED_MOTION=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
let fxEls=[], fxMode=null, fxT0=0, fxRaf=0;
let holdTimer=0, pressTimer=0, holdStart=0, holdPt=null, holding=false, blastedAt=0;

function fxBegin(mode,x,y){
  fxEnd();
  fxEls=WAVE_SCREENS.map(id=>document.getElementById(id)).filter(el=>el&&el.style.display!=='none');
  fxEls.forEach(el=>{
    const r=el.getBoundingClientRect();
    el.style.transformOrigin=(x-r.left)+'px '+(y-r.top)+'px';
    el.style.filter='url(#waterFx)';
    el.style.willChange='transform,filter';
  });
  fxMode=mode; fxT0=performance.now();
  if(!fxRaf) fxRaf=requestAnimationFrame(fxFrame);
}
function fxEnd(){
  fxEls.forEach(el=>{ el.style.filter=''; el.style.transform=''; el.style.transformOrigin=''; el.style.willChange=''; });
  fxEls=[]; fxMode=null;
  const d=$id('waterDisp'); if(d) d.setAttribute('scale','0');
}
function fxFrame(now){
  fxRaf=0;
  if(!fxMode) return;
  let t=now-fxT0, amp=0, sx=0, sy=0, rot=0, sc=1, done=false;

  if(fxMode==='tap'){
    const p=t/TAP_MS;
    if(p>=1){
      if(holding){ fxMode='press'; fxT0=holdStart; t=now-fxT0; }   // finger still down → build up
      else done=true;
    } else {
      const k=1-p, w=Math.sin(p*Math.PI*5);                         // damped drop-wave
      amp=16*k*Math.abs(Math.sin(p*Math.PI*3));
      sc=1+0.012*k*w; rot=0.25*k*w; sx=1.2*k*w;
    }
  }
  if(fxMode==='press'){                                              // slow tremble while holding
    const p=Math.min(1,t/HOLD_MS);
    amp=7*p*p; sx=2*p*Math.sin(t/24); sy=2*p*Math.cos(t/29);
  } else if(fxMode==='blast'){                                       // the burst
    const p=Math.min(1,t/BLAST_MS);
    amp=120*Math.sin(p*Math.PI/2); sc=1+0.07*Math.sin(p*Math.PI); rot=1.5*Math.sin(p*Math.PI*3)*(1-p);
    if(t>=BLAST_MS){ fxMode='flow'; fxT0=now; t=0; }
  }
  if(fxMode==='flow'){                                               // flowing, then calm
    const q=Math.min(1,t/FLOW_MS), d=(1-q)*(1-q);
    amp=50*d*(0.7+0.3*Math.sin(t/260));
    sx=16*d*Math.sin(t/380); sy=12*d*Math.cos(t/310);
    rot=1.4*d*Math.sin(t/520); sc=1+0.015*d*Math.sin(t/300);
    if(q>=1) done=true;
  }

  if(done){ fxEnd(); return; }
  const turb=$id('waterTurb'), disp=$id('waterDisp');
  if(turb) turb.setAttribute('baseFrequency',(0.006+0.004*Math.sin(now/700)).toFixed(4)+' '+(0.010+0.006*Math.cos(now/900)).toFixed(4));
  if(disp) disp.setAttribute('scale',amp.toFixed(2));
  const tf='translate('+sx.toFixed(2)+'px,'+sy.toFixed(2)+'px) rotate('+rot.toFixed(3)+'deg) scale('+sc.toFixed(4)+')';
  fxEls.forEach(el=>{ el.style.transform=tf; });
  fxRaf=requestAnimationFrame(fxFrame);
}
function cancelHold(){
  clearTimeout(holdTimer); clearTimeout(pressTimer); holding=false;
  if(fxMode==='press') fxEnd();
}
function triggerBlast(){
  holding=false; blastedAt=performance.now();
  const p=holdPt||{x:innerWidth/2,y:innerHeight/2};
  fxBegin('blast',p.x,p.y);
}

if(!REDUCED_MOTION){
  document.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0) return;
    if(fxMode==='blast'||fxMode==='flow') return;                   // let the big effect finish
    // Nothing heavy happens on touch-down, so scrolling/swiping stays instant and smooth.
    holding=true; holdStart=performance.now(); holdPt={x:e.clientX,y:e.clientY};
    clearTimeout(holdTimer); holdTimer=setTimeout(triggerBlast,HOLD_MS);
    clearTimeout(pressTimer); pressTimer=setTimeout(()=>{ if(holding&&holdPt) fxBegin('press',holdPt.x,holdPt.y); },PRESS_MS);
  });
  document.addEventListener('pointermove',e=>{
    if(!holding||!holdPt) return;
    if(Math.hypot(e.clientX-holdPt.x,e.clientY-holdPt.y)>14) cancelHold();   // dragging/scrolling ≠ long press
  });
  document.addEventListener('pointerup',e=>{
    // a quick tap (finger/mouse did not move) → splash; scrolls end in pointercancel / moved, so no effect
    const quick=holding&&holdPt&&performance.now()-holdStart<PRESS_MS&&Math.hypot(e.clientX-holdPt.x,e.clientY-holdPt.y)<=14;
    const pt=holdPt;
    cancelHold();
    if(quick&&pt&&fxMode!=='blast'&&fxMode!=='flow') fxBegin('tap',pt.x,pt.y);
  });
  document.addEventListener('pointercancel',cancelHold);
  document.addEventListener('contextmenu',e=>{ if(holding||performance.now()-blastedAt<600) e.preventDefault(); });
  // the click that follows releasing a finger after the blast should not press a button
  document.addEventListener('click',e=>{
    if(performance.now()-blastedAt<500){ e.preventDefault(); e.stopPropagation(); }
  },true);
}

// ════════════════════════════════════════════════════════════
//  MOBILE: swipe left/right on the question card to change question
// ════════════════════════════════════════════════════════════
(function wireSwipe(){
  const card=document.getElementById('mainCard');
  if(!card||!card.addEventListener) return;
  let sx=0, sy=0, t0=0, tracking=false;
  card.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||e.target.closest('input,textarea,button')){ tracking=false; return; }
    const t=e.touches[0]; sx=t.clientX; sy=t.clientY; t0=Date.now(); tracking=true;
  },{passive:true});
  card.addEventListener('touchend',e=>{
    if(!tracking) return; tracking=false;
    const t=e.changedTouches[0], dx=t.clientX-sx, dy=t.clientY-sy;
    if(Date.now()-t0>600||Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*2) return;
    if(dx<0) next(); else prev();
  },{passive:true});
})();
